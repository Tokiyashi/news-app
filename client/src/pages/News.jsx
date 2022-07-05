import React, {useEffect, useState} from 'react';
import PostList from "../Components/PostList/PostList";
import {useDispatch, useSelector} from "react-redux";
import Header from "../Components/Header/Header";
import PostFilter from "../Components/PostFilter";
import NavigationMenu from "../Components/NavigationMenu/NavigationMenu";
import {fetchNews} from "../http/postAPI";

const News = () => {
    const dispatch = useDispatch;
    const [posts, setPosts] = useState([]);

    useEffect( ()=>{
        findPosts();
    }, [])

    const findPosts = async () => {
        const result = await fetchNews();
        console.log(result)
        setPosts(result.data.data)
    }

    return (
        <main>
            <Header/>
            <div style={{display: "flex", minWidth: "65%"}}>
                <div style={{}}>
                    <NavigationMenu />
                </div>
                <div style={{width: '80%'}} >
                    {posts.length !== 0
                        ? <div>
                            <PostList posts={posts}></PostList>
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