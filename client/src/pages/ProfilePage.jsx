import React, {useMemo} from 'react';
import UserProfile from "../Components/UserProfile/UserProfile";
import Select from "../Components/UI/Select/Select";
import PostList from "../Components/PostList/PostList";
import {useState} from "react";
import PostFilter from "../Components/PostFilter";
import Header from "../Components/Header/Header";
import {useParams} from "react-router-dom";

const ProfilePage = () => {

    let userId = useParams()

    const [posts, setPosts] = useState([
    ]);

    const [filter, setFilter] = useState({sort: '', query: ''})

    const sortedPosts = useMemo(() => {
        if (filter.sort)
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        else
            return posts;
    }, [filter.sort, posts]);

    const sortedAndSearchedPosts = useMemo(()=>{
        return sortedPosts.filter(post => post.header.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

    return (
        <main>
            <Header/>
            <div className="profilePage">
                <UserProfile id={userId} />
                <PostFilter filter={filter} setFilter={setFilter} />
                <PostList posts={sortedAndSearchedPosts}/>
            </div>
        </main>
    );
};

export default ProfilePage;