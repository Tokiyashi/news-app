import React from 'react';
import Header from "../Components/UI/Header/Header";
import NavigationMenu from "../Components/UI/NavigationMenu/NavigationMenu";
import PostList from "../Components/PostList/PostList";

const LikedPosts = () => {
    return (
        <main>
            <Header/>
            <div style={{display: "flex", minWidth: "70%"}}>
                <div >
                    <NavigationMenu />
                </div>
                <div style={{width: '80%'}} >

                </div>
                <div style={{width: '20%'}}/>
            </div>
        </main>
    );
};

export default LikedPosts;