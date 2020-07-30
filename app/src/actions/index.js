import axios from "axios";

export const FETCHING_JOKES_START = "FETCHING_JOKES_START";
export const FETCHING_JOKES_SUCCESS = "FETCHING_JOKES_SUCCESS";
export const FETCHING_JOKES_ERROR = "FETCHING_JOKES_ERROR";




export const fetchAJokes = () => dispatch => {

    dispatch({ type: FETCHING_JOKES_START });


axios 
    .get("https://sv443.net/jokeapi/v2/joke/Any")
    .then(res => {
        console.log("FETCHING_JOKES_SUCCESS", res);
        dispatch({
            type: FETCHING_JOKES_SUCCESS,
            payload: res.data
        });    
    })
    .catch(err => {
        console.error("get all jokes data failed: ", err.message);
        dispatch({ 
            type: FETCHING_JOKES_ERROR, 
            payload: err.message 
        });
    })
}