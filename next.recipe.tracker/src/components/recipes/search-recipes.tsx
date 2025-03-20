"use client";

import { Meal } from "@/data/recipeApi/meal";
import { RecipeQueries } from "@/tanstack/recipes/recipe-queries";
import { useState } from "react";

export default function SearchRecipes() {
  const [searchParam, setSearchParam] = useState<string>("");

  const { data, isLoading } = RecipeQueries.useSearchRecipes(searchParam);
  return (
    <>
      <form className="flex flex-col items-center gap-4 p-4">
        <label className="text-lg font-medium text-shiwhite-100">
          Search for recipes
        </label>
        <input
          className="w-full max-w-md px-4 py-2 bg-shiwhite-900 text-shiwhite-50 rounded-md border border-shiwhite-700 focus:outline-none focus:ring-2 focus:ring-shiorange-500"
          onChange={(e) => setSearchParam(e.target.value)}
          type="text"
          placeholder="Type a recipe name..."
        />
      </form>

      {!isLoading && data && <RecipeList recipes={data.meals ?? []} />}
    </>
  );
}

function RecipeList({ recipes }: { recipes: Meal[] }) {
    if(!recipes)
    {
        return <>
            <div className="justify-center items-center" >
                <div>
                    No recipes in list
                </div>
            </div>
        </>
    }

  return (
    
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {recipes.map((recipe, index) => (
        <li
          key={index}
          className="bg-shiwhite-900 rounded-lg shadow-lg overflow-hidden p-4 transition-transform transform hover:-translate-y-1 hover:shadow-xl"
        >
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="w-full h-48 object-cover rounded-md"
          />
          <span className="block text-center mt-3 text-lg font-semibold text-shiwhite-50">
            {recipe.strMeal}
          </span>
        </li>
      ))}
    </ul>
  );
}
