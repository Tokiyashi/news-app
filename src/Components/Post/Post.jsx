import React from 'react';
import cl from './Post.module.css'
import test from './test avatar.jpg'
import like from './like-svgrepo-com.svg'

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
                <button>...</button>
            </div>
            <div className={cl.post__content}>
                <p>
                    <hr/>
                    {header}
                    <hr/>
                    {content}
                </p>
            </div>
            <div className={cl.post__info}>

                <h4> {creationDate} </h4>
                <div className={cl.post__info__buttons}>
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