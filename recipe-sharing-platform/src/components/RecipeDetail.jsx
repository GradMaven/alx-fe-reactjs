import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
  
    useEffect(() => {
      fetch("/src/data.json")
        .then((response) => response.json())
        .then((data) => {
          const foundRecipe = data.find((r) => r.id === parseInt(id));
          setRecipe(foundRecipe);
        })
        .catch((error) => console.error("Error fetching recipe details:", error));
    }, [id]);
  
    if (!recipe) {
      return <div className="text-center text-gray-600">Loading recipe...</div>;
    }
  
    return (
      <div className="container mx-auto p-4 sm:p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 sm:p-8">
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 sm:h-80 object-cover rounded-md" />
        <h1 className="text-2xl sm:text-3xl font-bold mt-4">{recipe.title}</h1>
        <p className="text-gray-700 mt-2 sm:text-lg">{recipe.summary}</p>
        <h2 className="text-xl sm:text-2xl font-semibold mt-6">Ingredients</h2>
        <ul className="list-disc list-inside mt-2 text-gray-600 sm:text-base">
          {recipe.ingredients?.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2 className="text-xl sm:text-2xl font-semibold mt-6">Instructions</h2>
        <p className="text-gray-700 mt-2 sm:text-base">{recipe.instructions}</p>
      </div>
    </div>
    );
  };
  
  export default RecipeDetail;
  
