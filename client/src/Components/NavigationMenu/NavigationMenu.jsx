import React from 'react';
import cl from './NavigationMenu.module.css'
import {Link, useParams} from "react-router-dom";
import {LIKED_ROUTE, NEWS_ROUTE, PROFILE_ROUTE, USER_ROUTE} from "../../utils/consts";
import {useSelector} from "react-redux";

const NavigationMenu = () => {

    const userId = useSelector(state => state.user.id)

    return (
        <div className={cl.leftBlock}>
            <Link className={cl.link} to={"/profile/"+ userId}> Я</Link>
            <Link className={cl.link} to={NEWS_ROUTE}> Новости</Link>
            <Link className={cl.link} to={LIKED_ROUTE}>Подписчики</Link>
            <Link className={cl.link} to={LIKED_ROUTE}> Оценено</Link>
        </div>
    );
};

export default NavigationMenu;