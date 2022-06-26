import React from 'react';
import {useState} from "react";
import cl from './PostList.module.css'
import Post from "../Post/Post";
import Select from "../UI/Select/Select";
import post from "../Post/Post";

const PostList = ({posts}) => {

    if (posts.length === 0){
        return(
            <div className={cl.notFound} >
                <h3> Посты не найдены &#128546; </h3>
            </div>
        )
    }

    return (
        <div className={cl.postList}>
            {posts.map((item, index) =>
                <Post key={index} header={item.header} author={item.name} content={item.content}> </Post>)
            }
        </div>
    );
};

export default PostList;