import React, {useEffect} from 'react';
import PostList from "../Components/PostList/PostList";
import {useDispatch, useSelector} from "react-redux";
import Header from "../Components/UI/Header/Header";
import PostFilter from "../Components/PostFilter";
import NavigationMenu from "../Components/UI/NavigationMenu/NavigationMenu";

const News = () => {
    const dispatch = useDispatch;
    const followedPosts = useSelector(state => state.posts.followed)


    useEffect( ()=>{
        //fetch posts then add to state
    }, [])


    return (
        <main>
            <Header/>
            <div style={{display: "flex", minWidth: "70%"}}>
                <div style={{width: '20%'}}>
                    <NavigationMenu />
                </div>
                <div style={{width: '80%'}} >
                    {followedPosts.length !== 0
                        ? <div>
                            <PostList posts={followedPosts}></PostList>
                        </div>
                        : <div > Not Found </div>
                    }
                </div>
                <div style={{width: '20%'}}/>
            </div>

        </main>
    );
};

export default News;