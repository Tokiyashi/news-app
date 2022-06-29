import React from 'react';
import './PostForm.module.css'

const PostForm = () => {
    return (
        <form>
            <input
                placeholder="topic..."
            />
            <hr/>
            <textarea

                placeholder=""
            />
            <button onClick={e=> e.preventDefault()} > Make Post! </button>
        </form>
    );
};

export default PostForm;