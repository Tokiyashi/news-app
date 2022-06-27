import './index.css';
import Header from "./Components/UI/Header/Header";
import UserProfile from "./Components/UserProfile/UserProfile";
import PostList from "./Components/PostList/PostList";
import React, {useState} from "react";
import Post from "./Components/Post/Post";
import Select from "./Components/UI/Select/Select";
import ProfilePage from "./pages/ProfilePage";
import NavigationMenu from "./Components/UI/NavigationMenu/NavigationMenu";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import LikedPosts from "./pages/LikedPosts";

function App() {

    return (

    <BrowserRouter>
        <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
