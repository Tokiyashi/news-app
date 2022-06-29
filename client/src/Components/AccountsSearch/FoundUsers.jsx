import React, {useEffect} from 'react';
import cl from './FoundUser.module.css'

const FoundUsers = ({users}) => {

    return (
        <div className={cl.foundUsers}>
            {
                users.length !== 0 &&
                    users.map((item, index) =>
                        <div className={cl.foundUser} key={index} > {item.login} </div>
                    )

            }
        </div>
    );
};

export default FoundUsers;