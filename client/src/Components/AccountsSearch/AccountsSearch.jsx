import React from 'react';
import {useState} from "react";
import {fetchUsers} from "../../http/userAPI";
import FoundUsers from "./FoundUsers";

const AccountsSearch = () => {

    const [foundUsers, setFoundUsers] = useState([]);

    async function findUsers(query){
        if (query){
        try{
            const result = await fetchUsers(query)
            if (result.data.data)
                setFoundUsers(result.data.data);
            else
                setFoundUsers([]);
            console.log(foundUsers);
        } catch (e) {

        }
       }
        else{
            setFoundUsers([])
        }
    }
     //   setFoundUsers(result.data.name);


    return (
        <div>
            <input
                placeholder="Поиск аккаунтов..."
                onChange={ e => findUsers(e.target.value)}
            />
            <FoundUsers users={foundUsers}/>
        </div>
    );
};

export default AccountsSearch;