import * as ActionTypes from "./ActionTypes"
import DISHES from "../shared/dishes";


//below is an action called addComment
// This is a function that creates an action object
// The payload contains whatever needs to be carried in so the data that is sent back by the addComment. This is just my way of defining it, and if it is a very natural way of specifying whatever data needs to be carried in the action object to the reducer function here. 
export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
})

// fetchDishes is a THUNK that is returning a function that is going to call or dispatch several actions.
export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));

    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
}

// Three of them are returning an action object
export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});