import React from 'react';

const Post = ({author, content, creationDate}) => {
    return (
        <div className="post">
            <div className={"post__header"}>
                <img
                />
                <h3> {author} </h3>
                <button>...</button>
            </div>
            <div className="post__content">
                <p>
                    <hr/>
                    {content}
                    <hr/>
                </p>
            </div>
            <div className="post__info">
                <h4> {creationDate} </h4>
            </div>
        </div>
    );
};

export default Post;