import React from 'react';
import cl from './NavigationMenu.module.css'
import {Link} from "react-router-dom";
import {LIKED_ROUTE, NEWS_ROUTE, USER_ROUTE} from "../../../utils/consts";

const NavigationMenu = () => {
    return (
        <div className={cl.leftBlock}>
            <Link className={cl.link} to={USER_ROUTE}> Я</Link>
            <Link className={cl.link} to={NEWS_ROUTE}> Новости</Link>
            <Link className={cl.link} to={LIKED_ROUTE}>Подписчики</Link>
            <Link className={cl.link} to={LIKED_ROUTE}> Оценено</Link>
        </div>
    );
};

export default NavigationMenu;