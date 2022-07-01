import React, {useEffect} from 'react';
import cl from './FoundUser.module.css'
import {Link} from "react-router-dom";

const FoundUsers = ({users}) => {

    return (
        <div className={cl.foundUsers}>
            {
                users.length !== 0 &&
                    users.map((item, index) =>
                        <div  className={cl.foundUser} key={index}> <Link to={'/profile/'+ item.id}>  {item.login} </Link> </div>
                    )
            }
        </div>
    );
};

export default FoundUsers;