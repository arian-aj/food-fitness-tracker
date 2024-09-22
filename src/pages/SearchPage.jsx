import SearchInput from "../components/SearchInput.jsx"
import SearchResults from "../components/SearchResults.jsx"
import { useState, useEffect, useContext } from "react"
import { FitFoodContext } from "../FitFoodContext.js";

export default function SearchPage({children}) {
    const [foodlist, setFoodlist] = useState([]);
    const [searchedFood, setSearchedFood] = useState("");
    const {chosenFoodNutrients, setChosenFoodNutrients} = useContext(FitFoodContext)
    const apiKey = "qfr2Ea0DVI1DZj0SqNJ2S7CN0DyTpNSRg2SBVk9X"

    useEffect(() => {
        fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${apiKey}&query=${encodeURIComponent(searchedFood)}`)
        .then(resp => {
            if (!resp.ok) {
                throw new Error("Error fetching data")
            }
            return resp.json();
        })
        .then(data => {
            console.log(data)
            setFoodlist(data);
        }
        )
        .catch(err => {
            console.error("found Error", err)
            setFoodlist([])
        })

    }, [searchedFood])
    
    
    return (
        <>
            <SearchInput searchedFood={searchedFood} setSearchedFood={setSearchedFood} />
            <SearchResults searchedFood={searchedFood} foodlist={foodlist} chosenFoodNutrients={chosenFoodNutrients} setChosenFoodNutrients={setChosenFoodNutrients} />
        </>       
    )
}