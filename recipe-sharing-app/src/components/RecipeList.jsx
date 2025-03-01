 // RecipeList component
 import { useRecipeStore } from './recipeStore';

 const RecipeList = () => {
   const recipes = useRecipeStore(state => state.recipes);

   return (
     <div>
      <h2>Recipes</h2>
      <ul>
       {recipes.map(recipe => (
         <div key={recipe.id}>
           <h3>{recipe.title}</h3>
           <p>{recipe.description}</p>
         </div>
       ))}
       </ul>
     </div>
   );
 };

 export default RecipeList;