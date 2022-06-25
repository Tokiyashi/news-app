import React from 'react';
import cl from './NavigationMenu.module.css'

const NavigationMenu = () => {
    return (
        <div className={cl.leftBlock}>
            <button > Me</button>
            <button > News</button>
            <button > Followers</button>
            <button > Liked</button>
        </div>
    );
};

export default NavigationMenu;