import { useState } from "react"

export default function SearchInput({setSearchedFood}) {

    const [searchInput, setSearchInput] = useState("");



    return (
        <>
            <form action="submit"
                onSubmit={(e) => {
                    e.preventDefault();
                    setSearchedFood(searchInput.trim())
                }}
            >
                <input type="text" name="search-input" id="search-input" value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <button>Search Food</button>
            </form>

        </>
    )
}