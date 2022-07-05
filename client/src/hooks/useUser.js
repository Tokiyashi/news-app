import {fetchUser} from "../http/userAPI";

export const useUserById = async (id) => {
    if (!id)
        return
    const data = await fetchUser(id);
    return data.data.data.name
}