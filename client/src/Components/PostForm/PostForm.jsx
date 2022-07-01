import React, {useState} from 'react';
import './PostForm.module.css'
import {createPost} from "../../http/postAPI";
import {useSelector} from "react-redux";

const PostForm = () => {

    const [postContent, setPostContent] = useState({
        text:"",
        topic:""
    })

    const [serverMessage, setServerMessage] = useState('')
    const userId = useSelector(state => state.user.id)

    async function create(){
        console.log(userId, postContent.text)
        const response = await createPost(userId, postContent.text);
        console.log(response.data.text);
        setPostContent({
            text:"",
            topic:""
        })
        setServerMessage(response.data.text);
    }

    return (
        <form>
            <input
                placeholder="Тема..."
            />
            <hr/>
            <textarea
                value={postContent.text}
                onChange={e => setPostContent({...postContent, text: e.target.value})}
                placeholder="Чем бы вы хотели поделиться со всеми?"
            />
            <h3> {serverMessage} </h3>
            <button onClick={e=> {
                e.preventDefault();
                create();
            }} > Make Post! </button>
        </form>
    );
};

export default PostForm;