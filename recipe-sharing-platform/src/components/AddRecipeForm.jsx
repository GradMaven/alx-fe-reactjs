import { useState,  } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!title.trim()) tempErrors.title = "Recipe title is required.";
    if (!ingredients.trim()) tempErrors.ingredients = "Ingredients are required.";
    if (!steps.trim()) tempErrors.steps = "Instructions are required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;
    console.log({ title, ingredients, steps });
    alert("Recipe submitted successfully!");
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="container mx-auto p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">Add New Recipe</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        {Object.values(errors).map((error, index) => (
          <p key={index} className="text-red-500 mb-4">{error}</p>
        ))}
        <div className="mb-4">
          <label className="block text-gray-700">Recipe Title</label>
          <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} className="w-full mt-2 p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Ingredients</label>
          <textarea value={ingredients} onChange={(event) => setIngredients(event.target.value)} className="w-full mt-2 p-2 border rounded"></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Preparation Steps</label>
          <textarea value={steps} onChange={(event) => setSteps(event.target.value)} className="w-full mt-2 p-2 border rounded"></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit Recipe</button>
      </form>
    </div>
  );
};

  export default AddRecipeForm;
  
