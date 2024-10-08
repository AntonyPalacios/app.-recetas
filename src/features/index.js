import {combineReducers} from "redux";
import {recipeReducer,modalReducer} from "./recipes";
import {ingredientReducer} from "./ingredients";


export const reducer = combineReducers({
    recipes: combineReducers({
        entities: recipeReducer,
        modal: modalReducer
    }),
    ingredients: ingredientReducer
})