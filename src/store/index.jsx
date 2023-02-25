import { legacy_createStore as createStore } from "redux";
/*
    * reducerFn is a function that takes two arguments:
    * 1. state : current state value
    * 2. action: describes what happened
    * 
    * returns the new state
*/
const reducerFn = (state = { counter: 0 }, action) => {

    /*
        *limitation
        * 1. we can't have async code here (Must Be Synchronous Function)
        * 2. we should not mutate the state
        
    */
    if (action.type === 'INCREMENT') {
        return { counter: state.counter + 1 }
    }
    if (action.type === 'Decrement') {
        return { counter: state.counter - 1 }
    }
    if (action.type === "AddBy") {
        return { counter: state.counter + action.payload }
    }
    return state;
}

/*
    * create a redux store holding the state of our app
*/
const store = createStore(reducerFn);
export default store;