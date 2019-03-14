import axios from 'axios'; 
import { GET_RECIPES, ADD_RECIPE, DELETE_RECIPE, ADD_IMAGE, RECIPES_LOADING} from './types';

export const getRecipes = () => dispatch => {
    dispatch(setRecipesLoading());
    axios
    .get('/recipes')
   .then(res => dispatch({
       type: GET_RECIPES, 
       payload: res.data
   })
   )
}
export const addRecipe = recipe => dispatch => {
   axios
   .post('/recipes', recipe)
   .then(res => 
    dispatch({
        type: ADD_RECIPE, 
        payload: res.data
    }))
}
export const addImage = image => dispatch => {
    axios
    .post('/image', image)
    .then(res => 
     dispatch({
         type: ADD_IMAGE, 
         payload: res.data
     }))
 }
export const deleteRecipe = id => dispatch => {
    axios
    .delete(`/recipes/${id}`)
    .then(res => 
        dispatch({
            type: DELETE_RECIPE, 
            payload: id
        }))

}
export const setRecipesLoading = () => {
    return {
        type: RECIPES_LOADING
    }
}
