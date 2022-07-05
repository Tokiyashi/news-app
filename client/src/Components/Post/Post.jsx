import React, {useMemo, useState} from 'react';
import cl from './Post.module.css'
import test from './test avatar.jpg'
import like from './heart (1).png'
import comment from './comment.png'
import info from './option.png'
import {addNewComment, fetchCommentsByPostId} from "../../http/commentsAPI";
import Comments from "../Comments";

const Post = ({author, id, content, header, creationDate}) => {

    const [activeComments, setActiveComments] = useState(false);
    const [comments, setComments] = useState([]);
    const toggleComments = () => {
        setActiveComments(!activeComments);
        if (!activeComments)
            fetchComments()
    }

    const [commentInput, setCommentInput] = useState('');

    // const [comments, setComments, toggleComments, openComments] = useComments

    const fetchComments  = async () => {
        const result = await fetchCommentsByPostId(id);
        setComments(result.data.data);
    }

    const openComments = () => {
        return activeComments ? "inline": "none"
    }

    const addComment = async () => {
        if (commentInput)
        await addNewComment(author, id, commentInput)
        await fetchComments()
    }

    return (
        <div className={cl.post}>
            <div className={cl.post__header}>
                <div className={cl.post__header__user}>
                    <img
                        src={test}
                        width="40px"
                    />

                    <h3> {author}   {header} </h3>
                </div>
                <img
                    alt="options"
                    src={info}
                    width="40px"
                />
            </div>
            <div className={cl.post__content}>
                <p>
                    <br/>
                    {content}
                </p>
            </div>
            <div className={cl.post__info}>
                <h4> {creationDate} </h4>
                <div className={cl.post__info__buttons}>
                    <img
                        onClick={toggleComments}
                        alt="comment"
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
            <div style={{display: openComments()}}>

                <Comments comments={comments}/>
                <input
                    value={commentInput}
                    onChange={(e)=> setCommentInput(e.target.value)}
                    placeholder="Добавить комментарий..."

                />
                <button onClick={()=> addComment()}> Готово </button>
            </div>
        </div>
    );
};

export default Post;