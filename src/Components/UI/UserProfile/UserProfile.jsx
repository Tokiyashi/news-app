import React from 'react';
import test from "../../../img/test avatar.jpg";
import cl from './UserProfile.module.css'
import {useDispatch, useSelector} from "react-redux";

const UserProfile = () => {

    const dispatch = useDispatch()
    const follows = useSelector(state => state.follows)


    return (
        <>
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
                     alt="avatar"
                     src={test}
                     draggable="false"
                />
            </div>
            <div className={cl.followInfo}>
                <div className={[cl.followInfo__follows, cl.redBox].join(' ')}>
                    <h3>Follows: {follows} </h3>
                </div>
                <div className={[cl.followInfo__followers, cl.redBox].join(' ')}>
                    <h3 >Followers: 13</h3>
                </div>
                <div className={[cl.followInfo__likes, cl.redBox].join(' ')}>
                    <h3> Likes: 342 </h3>
                </div>
            </div>
        </>
    );
};

export default UserProfile;