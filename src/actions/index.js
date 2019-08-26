export const SET_RECIPES = "SET_RECIPES";
export const FAVOURITE_RECIPE = "FAVOURITE_RECIPE";

export function getRecipes(items){
    return {
        type:SET_RECIPES,
        items
    }
}
export function favoriteRecipe(recipe){
    return {
        type:FAVOURITE_RECIPE,
        recipe
    }
}