import './index.css';
import Header from "./Components/UI/Header/Header";
import UserProfile from "./Components/UserProfile/UserProfile";
import PostList from "./Components/PostList/PostList";
import React, {useState} from "react";
import Post from "./Components/Post/Post";
import Select from "./Components/UI/Select/Select";
import ProfilePage from "./Components/pages/ProfilePage";
import NavigationMenu from "./Components/UI/NavigationMenu/NavigationMenu";

function App() {

    return (
    <>
        <Header/>
        <main>
            <ProfilePage/>
        </main>
    </>
  );
}

export default App;
