import {combineReducers, createStore} from "redux";
import {postsReducer} from "./postsReducer";
import {composeWithDevTools} from "@redux-devtools/extension";
import {photosReducer} from "./photosReducer";
import {userReducer} from "./userReducer";


const rootReducer = combineReducers({
    posts: postsReducer,
    photos: photosReducer,
    user: userReducer,
});

export const store = createStore(rootReducer)
