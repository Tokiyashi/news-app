import React from 'react';
import cl from './Header.module.css'
import logo from './social-media.png'

const Header = () => {
    return (
        <header>
            <div className={cl.navbar__name}>
                <img
                    alt='logo'
                    src={logo}
                    width="50px"
                />
               <h2> #ТАЩИ </h2>
            </div>

            <div className={cl.navbar__search}>
                <input
                placeholder="Поиск..."
                />
            </div>
            <div className={cl.navbar__signup}>
                Sign in
            </div>
        </header>
    );
};

export default Header;