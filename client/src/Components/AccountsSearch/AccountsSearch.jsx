import React from 'react';
import {useState} from "react";
import {fetchUsers} from "../../http/userAPI";

const AccountsSearch = () => {

    const [foundUsers, setFoundUsers] = useState([]);

    async function findUsers(query){
       await fetchUsers(query).then(result => {

       });
     //   setFoundUsers(result.data.name);
    }

    return (
        <div>
            <input
                placeholder="Поиск аккаунтов..."
                onChange={ e => findUsers(e.target.value)}
            />
            {
                foundUsers.length !== 0 &&
                foundUsers.map((item, index) =>
                    <div key={index} >  </div>
                )
            }
        </div>
    );
};

export default AccountsSearch;