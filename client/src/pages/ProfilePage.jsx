import React, {useMemo} from 'react';
import UserProfile from "../Components/UserProfile/UserProfile";
import Select from "../Components/UI/Select/Select";
import PostList from "../Components/PostList/PostList";
import {useState} from "react";
import PostFilter from "../Components/PostFilter";
import Header from "../Components/Header/Header";
import {useParams} from "react-router-dom";
import {fetchUser} from "../http/userAPI";
import {useEffect} from "react";
import {fetchUserPosts} from "../http/postAPI";

const ProfilePage = () => {

    const userId = useParams()

    const [user, setUser] = useState({});

    const fetchCurrentUser = async (x) => {
        const result = await fetchUser(x);
        setUser(result.data.data);
        const fetchedPosts = await fetchUserPosts(x)
        //setPosts(fetchedPosts.data.data)
    }

    useEffect( ()=>{
        fetchCurrentUser(userId.id);
    }, [])

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
        return sortedPosts.filter(post => post.topic.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])



    return (
        <main>
            <Header/>
            { user ?
            <div className="profilePage">
                <UserProfile user={user} />
                <PostFilter filter={filter} setFilter={setFilter} />
                <PostList posts={posts}/>
            </div>
                : <div> Пользователь не найден... </div>
            }
        </main>
    );
};

export default ProfilePage;