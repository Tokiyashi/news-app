import React from 'react';
import {useState} from "react";
import cl from './PostList.module.css'
import Post from "../Post/Post";
import Select from "../UI/Select/Select";
import post from "../Post/Post";
import {useUserById} from "../../hooks/useUser";

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

                <Post key={index} id={item.id} header={item.topic} author={item.user_id} creationDate={item.publicationdate} content={item.text}> </Post>)
            }
        </div>
    );
};

export default PostList;