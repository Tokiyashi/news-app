import React, {useMemo} from 'react';
import UserProfile from "../Components/UserProfile/UserProfile";
import Select from "../Components/UI/Select/Select";
import PostList from "../Components/PostList/PostList";
import {useState} from "react";
import PostFilter from "../Components/PostFilter";
import Header from "../Components/Header/Header";
import {useParams} from "react-router-dom";
import {checkAuth, fetchUser} from "../http/userAPI";
import {useEffect} from "react";
import {fetchUserPosts} from "../http/postAPI";
import {useDispatch} from "react-redux";
import {usePosts} from "../hooks/usePosts";

const ProfilePage = () => {

    const dispatch = useDispatch();
    const userId = useParams();
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''})
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

     const fetchCurrentUser = async (x) => {
        const result = await fetchUser(x);
        if (result.data.data)
        setUser(result.data.data);
        const fetchedPosts = await fetchUserPosts(x)
         if (fetchedPosts.data.data)
        setPosts(fetchedPosts.data.data)
    }

     const checkIsAuth = async () => {
        const localData = await checkAuth();
        if (!localData.login)
            return
        dispatch({type: "LOGIN", payload: localData})
    }

    useEffect( ()=>{
       checkIsAuth()
       fetchCurrentUser(userId.id);
    }, [])



    return (
        <main>
            <Header/>
            { user.login ?
            <div className="profilePage">
                <UserProfile user={user} />
                <PostFilter filter={filter} setFilter={setFilter} />
                <PostList posts={sortedAndSearchedPosts}/>
            </div>
                : <div> Пользователь не найден... </div>
            }
        </main>
    );
};

export default ProfilePage;