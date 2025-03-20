import { useQuery } from "@tanstack/react-query"
import { RecipeServices } from "./recipe-services"

export const RecipeQueries = {
    useSearchRecipes(search: string)
    {
        return useQuery({
            queryFn: () => RecipeServices.GetRecipesFromSearch(search),
            queryKey: ['food', search],
            enabled: !!search
        })
    }
}