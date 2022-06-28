import {combineReducers, createStore} from "redux";
import {postsReducer} from "./postsReducer";
import {composeWithDevTools} from "@redux-devtools/extension";
import {photosReducer} from "./photosReducer";


const rootReducer = combineReducers({
    posts: postsReducer,
    photos: photosReducer
});

export const store = createStore(rootReducer)
