import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FitFoodContext } from "../FitFoodContext.js";

export default function SearchResults({ searchedFood, foodlist }) {
  // Use the context to get the setChosenFoodNutrients function
  const { setChosenFoodNutrients } = useContext(FitFoodContext);
  const navigate = useNavigate();

  // Ensure foodlist and foodlist.foods are defined before mapping
  const foods = foodlist?.foods || [];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Searched for {searchedFood}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {foods.length > 0 ? (
          foods.map((food) => (
            <div
              key={food.fdcId}
              className="p-4 border rounded-lg shadow hover:bg-gray-100"
            >
              <h3 className="text-xl font-semibold">{food.description}</h3>
              <h4 className="text-md text-gray-600">{food.foodCategory}</h4>
              <h4 className="text-md text-gray-600">{food.brandName}</h4>
              <button
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                onClick={() => {
                  setChosenFoodNutrients(food);
                  console.log(food); // Log the selected food item
                  navigate("/nutrients");
                }}
              >
                View Nutrients
              </button>
            </div>
          ))
        ) : (
          <p>No results found for "{searchedFood}".</p>
        )}
      </div>
    </div>
  );
}
