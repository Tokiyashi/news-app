import React from 'react';
import test from "../../../img/test avatar.jpg";
import cl from './UserProfile.module.css'

const UserProfile = () => {
    return (
        <div className={cl.userProfile}>
            <div className={cl.userProfile__info}>
                <div>
                    <h3 className={cl.userProfile__info__username}> UserName </h3>
                    <p className={cl.userProfile__info__id}>id:12312415</p>
                    <p className={cl.userProfile__info__status}>"Волк не тот кто волк, а тот кто не выступает в цирке"</p>
                </div>
                <button> What's New today? </button>
            </div>
            <img className={cl.userProfile__avatar}
                 width="200px"
                 alt="avatar"
                 src={test}
                 draggable="false"
            />
        </div>
    );
};

export default UserProfile;