import React, {useEffect, useState} from 'react';
import test from "../../img/test avatar.jpg";
import cl from './UserProfile.module.css'
import {useDispatch, useSelector} from "react-redux";
import SignForm from "../SignForm/SignForm";
import PostForm from "../PostForm/PostForm";
import Modal from "../UI/Modal/Modal";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import {fetchUser} from "../../http/userAPI";

const UserProfile = ({id}) => {

    const [createPostModal, setCreatePostModal] = useState(false);

    const [user, setUser] = useState({});

    useEffect( ()=>{
        const fetch = async () => {
            const result = await fetchUser(id)
            console.log(result)
        }
        fetch();
    }, [])

    const dispatch = useDispatch()
    const follows = useSelector(state => state.follows)
    return (

        <div className={cl.wrapper}>
            <NavigationMenu/>
            <div className={cl.mainBlock}>
                <div className={cl.userProfile}>
                    <div className={cl.userProfile__info}>
                        <div>
                            <h3 className={cl.userProfile__info__username}> UserName </h3>
                            <p className={cl.userProfile__info__id}>id:12312415</p>
                            <p className={cl.userProfile__info__status}>"Волк не тот кто волк, а тот кто не выступает в
                                цирке"</p>
                        </div>
                        <button onClick={() => {
                            setCreatePostModal(true)
                        }}> Что у вас сегодня нового?
                        </button>
                    </div>
                    <img className={cl.userProfile__avatar}
                         alt="avatar"
                         src={test}
                         draggable="false"
                    />
                    <Modal active={createPostModal} setActive={setCreatePostModal}>
                        <PostForm/>
                    </Modal>

                </div>
                <div className={cl.followInfo}>
                    <div className={[cl.followInfo__follows, cl.redBox].join(' ')}>
                        <h3>Подписки: {follows} </h3>
                    </div>
                    <div className={[cl.followInfo__followers, cl.redBox].join(' ')}>
                        <h3>Подписчики: 13</h3>
                    </div>
                    <div className={[cl.followInfo__likes, cl.redBox].join(' ')}>
                        <h3> Лайки: 342 </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;