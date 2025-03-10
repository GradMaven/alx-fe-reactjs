
 import { useRecipeStore } from './recipeStore';
 import { Link } from 'react-router-dom';

 const RecipeList = () => {
   const recipes = useRecipeStore(state => state.recipes);

   return (
     <div>
      <h2>Recipes</h2>
      <ul>
       {recipes.map(recipe => (
         <div key={recipe.id}>
           <h3><Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link></h3>
           <p>{recipe.description}</p>
         </div>
       ))}
       </ul>
     </div>
   );
 };

 export default RecipeList;
