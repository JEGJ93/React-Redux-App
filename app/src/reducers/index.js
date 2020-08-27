import {
    FETCHING_JOKES_START, 
    FETCHING_JOKES_SUCCESS, 
    FETCHING_JOKES_ERROR } from "../actions";



const initialState = {
    joke: { 
        setup: '', 
        delivery:'',
        category: ''
    },
    isFetching: false,
    error: "",

}





export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_JOKES_START:
            return {
                ...state,
                isFetching: true

            };
        case FETCHING_JOKES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                joke: {...state.joke,
                setup: action.payload.setup,
                delivery: action.payload.delivery,
                category: action.payload.category
               
            },
                error: ""
            }    
        case FETCHING_JOKES_ERROR:
            return {
                ...state, 
                isFetching: false,

            }    
        default:
            return state; 
    }
}