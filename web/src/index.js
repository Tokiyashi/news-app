import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";

const defaultState = {
    follows:0,
}


const reducer = (state = defaultState, action) => {
    switch (action.type){
        case "FOLLOW":
            return {...state, follows: state.follows+1}
        case "UNFOLLOW":
            return {...state, follows: state.follows-1}

        default:
            return state
    }
}

const store = createStore(reducer)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
