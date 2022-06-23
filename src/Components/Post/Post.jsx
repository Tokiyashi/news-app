import React from 'react';
import cl from './Post.module.css'

const Post = ({author, content, creationDate}) => {
    return (
        <div className={cl.post}>
            <div className={cl.post__header}>
                <img
                />
                <h3> {author} </h3>
                <button>...</button>
            </div>
            <div className={cl.post__content}>
                <p>
                    <hr/>
                    {content}
                    <hr/>
                </p>
            </div>
            <div className={cl.post__info}>
                <h4> {creationDate} </h4>
            </div>
        </div>
    );
};

export default Post;