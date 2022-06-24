import React from 'react';
import {useState} from "react";
import Post from "../Post/Post";

const PostList = () => {
    const [posts, setPost] = useState([
        {name: "Мазила", header:'Прикол', content: 'РЕБЯТА НОЖ ВЫПАЛ! ЧЕСТНО Я НЕ ШУЧУ!'},
        {name: "Вася", header:'какой-то заголовок', content: 'РЕБЯТА НОЖ ВЫПАЛ! ЧЕСТНО Я НЕ ШУЧУ!'},
    ]);

    const postList = posts.map((item, index) =>
        <Post key={index} header={item.header} author={item.name} content={item.content} > </Post>);

    return (
        <>
            {postList}
        </>
    );
};

export default PostList;