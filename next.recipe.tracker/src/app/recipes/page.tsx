import { RecipeApiSearchResult } from "@/data/recipeApi/search-result";

export default async function Recipes() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
  );
  const data = await response.json() as RecipeApiSearchResult;
  return (
    <div>
      <pre>{data.meals[0].strMeal}</pre>
      <img src={data.meals[0].strMealThumb}/>
    </div>
  );
}
