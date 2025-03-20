import { SearchResult } from "@/data/recipeApi/search-result"
import axios from "axios"

export const RecipeServices = {
    async GetRecipesFromSearch(search: string)
    {
        var response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        return response.data as SearchResult
    }
}