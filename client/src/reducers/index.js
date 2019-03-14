import { combineReducers } from 'redux'; 
import itemReducer from './itemReducer'; 
import recipeReducer from './recipeReducer'; 
import imageReducer from './imageReducer'; 

export default combineReducers({
    item: itemReducer,
    recipe: recipeReducer,
    image: imageReducer
});