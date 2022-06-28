import {$host} from "./index";

export const registration = async (email,login, password, surname, name, age) => {
        const response = await $host.post('api/user/signup', {email,login, password, surname, name, age});
        return response
}