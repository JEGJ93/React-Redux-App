import React from "react";
import { connect } from "react-redux";
import { fetchAJokes } from "../actions";

const JokeSearch = props => {
    if (props.isFetching) {
        return <div>**fetching joke data**</div>
    }


    
    return (
        <>
       
        <div className="Joke Div">
        <h1>Random Joke Generator</h1>
        <button onClick={() => props.fetchAJokes()}>Fetch Joke</button>

        {props.joke.category.length ? (
        <div>
            <h2>Category</h2>
            <p>{props.joke.category}</p> 
            <h2>Setup</h2>
            <p>{props.joke.setup}</p>
            <h2>PunchLine</h2>
            <p>{props.joke.delivery}</p>
         </div>       
        ) : (

        <div style={{ color: "red" }}>{props.error} </div>
        
        )}
         
           
        </div>
        
        </> 
    )
};

const mapStateToProps = state => {
    return {
        joke: state.joke,
        isFetching: state.isFetching,
        error: state.error

    }
}

export default connect(
    mapStateToProps,
    { fetchAJokes }
)(JokeSearch);