import { FitFoodContext } from "../FitFoodContext.js"
import { useContext } from "react"

export default function NutrientsPage() {
    const { chosenFoodNutrients } = useContext(FitFoodContext)
    console.log(chosenFoodNutrients);

    const servingSize = chosenFoodNutrients.servingSize;
    const nutrients = chosenFoodNutrients.foodNutrients;

    // Convert nutrient values to per 100 grams
    const nutrientsPer100g = nutrients.map(nutrient => {
        const { nutrientName, unitName, value } = nutrient;
        const valuePer100g = servingSize ? (value / servingSize) * 100 : value;
        return {
            nutrientName,
            unitName,
            valuePer100g: valuePer100g.toFixed(2) // rounding to 2 decimal places
        };
    })
    .filter(nutrient => nutrient.valuePer100g !== '0.00'); // Filter out zero values

    return (
        <>
            <h1>Nutrients</h1>
            {
                !chosenFoodNutrients? (<h1>No Food chosen</h1>
                ) : (
                    <>
                    <h1>
                        {chosenFoodNutrients.description}
                    </h1>
                    <ul>
                        {nutrientsPer100g.map((nutrient, index) => (
                            <li key={index}>
                                <strong>{nutrient.nutrientName}:</strong> {nutrient.valuePer100g} {nutrient.unitName.toLowerCase()}
                            </li>
                        ))}
                    </ul>
                    </>
                )
            }
        </>
    )
}



