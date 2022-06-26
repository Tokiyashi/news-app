import React from 'react';
import cl from './NavigationMenu.module.css'

const NavigationMenu = () => {
    return (
        <div className={cl.leftBlock}>
            <button > Я</button>
            <button > Новости</button>
            <button > Подписчики</button>
            <button > Оценено</button>
        </div>
    );
};

export default NavigationMenu;