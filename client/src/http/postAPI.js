import {$host} from "./index";

export const createPost = async (userId, text) => {
    return await $host.post('api/post/create', {userId, text});
}

export const fetchUserPosts = async (id) => {
    const data = await $host.get('api/post/userId/' + id, id);
    console.log(data)
    return data
}




