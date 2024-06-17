import { configureStore } from "@reduxjs/toolkit";
import listingReducer from "./listing";

// const store = configureStore({
//     reducer:{
//         listingReducer,
//     },
//     devTools: true,
// });

const storeToLocalStore = (props) => {
    return (next) => {
        return (action) => {
            const result = next(action);
            // statemets here will be executed immediately after action completeion in redux

            console.log(props.getState())

            //result will have the next step
            localStorage.setItem("redux_store", JSON.stringify(props.getState()));

            return result;
        };
    };
};
const loadFromStorage = () => {
    if (localStorage.getItem("redux_store") !== null) {
        return JSON.parse(localStorage.getItem("redux_store"))
    }
};


const store = configureStore({
    reducer: {
        listingReducer,
    },
    devTools: true,
    middleware: (defaultMiddlewaresFn) => {
        return [
            ...defaultMiddlewaresFn(), // spread default middlewares from the function
            storeToLocalStore,
        ]
    },
    preloadedState: loadFromStorage(),

});

export default store;