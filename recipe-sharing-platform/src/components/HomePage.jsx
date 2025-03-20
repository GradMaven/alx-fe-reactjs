import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/src/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  return (
     <div className="container mx-auto p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden sm:hover:shadow-lg transition-shadow">
            <img src={recipe.image} alt={recipe.title} className="w-full h-40 sm:h-48 object-cover" />
            <div className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold">{recipe.title}</h2>
              <p className="text-gray-600 mt-2 sm:text-base">{recipe.summary}</p>
              <a href={`/recipe/${recipe.id}`} className="mt-4 bg-blue-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded hover:bg-blue-600 inline-block">
                View Recipe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
