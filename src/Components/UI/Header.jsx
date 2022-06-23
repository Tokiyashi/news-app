import React from 'react';
import cl from './Header.module.css'

const Header = () => {
    return (
        <header>
            <div className="navbar__name">
                Название сайта
            </div>
            <div className="navbar__input">
                Поиск
                <input/>
            </div>
            <div>
                логин
            </div>
        </header>
    );
};

export default Header;