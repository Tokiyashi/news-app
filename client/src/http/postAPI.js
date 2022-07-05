import {$host} from "./index";

export const createPost = async (userId, text, topic) => {
    return await $host.post('api/post/create', {userId, text, topic});
}

export const fetchUserPosts = async (id) => {
    const data = await $host.get('api/post/userId/' + id, id);
    console.log(data)
    return data
}

export const fetchNews = async () => {
    return await $host.get('api/post/all');
}




