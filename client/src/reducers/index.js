import { combineReducers } from 'redux'; 
import itemReducer from './itemReducer'; 
import recipeReducer from './recipeReducer'; 
// import imageReducer from './imageReducer'; 
import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
    item: itemReducer,
    recipe: recipeReducer,
    // image: imageReducer,
    error: errorReducer,
    auth: authReducer
});