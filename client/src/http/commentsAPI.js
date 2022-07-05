import {$host} from "./index";

export const fetchCommentsByPostId = async (postId) => {
    const result =  await $host.get('api/comments/post/' + postId );
    console.log(result);
    return result;
}

export const addNewComment = async (userId, postId, note) => {
    const result =  await $host.post('api//comment/create', {userId, postId, note} );
    console.log(result);
    return result;
}
