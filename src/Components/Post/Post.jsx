import React from 'react';
import cl from './Post.module.css'
import test from './test avatar.jpg'
import like from './heart (1).png'
import comment from './comment.png'
import info from './option.png'

const Post = ({author, content, header, creationDate}) => {
    return (
        <div className={cl.post}>
            <div className={cl.post__header}>
                <div className={cl.post__header__user}>
                    <img
                        src={test}
                        width="40px"
                    />
                    <h3> {author} </h3>
                </div>
                <img
                    src={info}
                    width="40px"
                />
            </div>
            <div className={cl.post__content}>
                <p>
                    {header} <br/>
                    {content}
                </p>
            </div>
            <div className={cl.post__info}>

                <h4> {creationDate} </h4>
                <div className={cl.post__info__buttons}>

                    <img
                        src={comment}
                        width="40px"
                    />
                    <img
                        alt="like"
                        id={cl.likeBtn}
                        src={like}
                        width="40px"
                    />

                </div>

            </div>
        </div>
    );
};

export default Post;