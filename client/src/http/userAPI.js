import {$host} from "./index";

export const registration = async (email,login, password, surname, name, age) => {

    const data = await $host.post('api/user/signup', {email,login, password, surname, name, age});
    return data
}

export const signIn = async (emailOrLogin, password) => {
    const data = await $host.post('api/user/signin', {emailOrLogin, password});
    console.log(data)
    localStorage.setItem("authId", data.data.data.id);
    localStorage.setItem("login", data.data.data.login);
    return data
}

export const fetchUsers = async (query) => {
    const data = await $host.get('api/users/login/'+ query);
    return data
}

export const fetchUser = async (id) => {
    const data = await $host.get('api/user/id/' + id);
    return data
}

export const checkAuth = async () => {
    return {id: localStorage.getItem("authId"),login: localStorage.getItem("login")}
}




