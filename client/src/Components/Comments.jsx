import React from 'react';

const Comments = ({comments}) => {
    return (
        <div>
            {
                comments.map((item, index) =>
                <p key={index} > {item.note} </p>)
            }
        </div>
    );
};

export default Comments;