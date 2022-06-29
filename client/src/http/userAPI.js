import {$host} from "./index";
import jwtDecode from "jwt-decode";

export const registration = async (email,login, password, surname, name, age) => {

    const data = await $host.post('api/user/signup', {email,login, password, surname, name, age});
    //if (data.token)
    //return jwtDecode(data.token);
    return data
}

export const fetchUsers = async (query) => {

    const data = await $host.get('api/user/login/'+ query);
    console.log(data);
    return data
}