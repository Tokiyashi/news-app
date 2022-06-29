import {$host} from "./index";
import jwtDecode from "jwt-decode";

export const registration = async (email,login, password, surname, name, age) => {

    const data = await $host.post('api/user/signup', {email,login, password, surname, name, age});
    //if (data.token)
    //return jwtDecode(data.token);
    return data
}

export const login = async (email,login, password, surname, name, age) => {

    const data = await $host.post('api/user/signup', {email,login, password, surname, name, age});
    //if (data.token)
    //return jwtDecode(data.token);
    return data
}

export const fetchUsers = async (query) => {

    const data = await $host.get('api/users/login/'+ query);
    console.log(data);
    return data
}
export const fetchUser = async (id) => {
    const data = await $host.get('api/user/id/'+id);
    console.log(data);
    return data

}




