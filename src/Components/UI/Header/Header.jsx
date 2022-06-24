import React, {useState} from 'react';
import cl from './Header.module.css'
import logo from './social-media.png'
import Modal from "../Modal/Modal";
import SignForm from "../SignForm/SignForm";

const Header = () => {
    const [loginModalActive, setLoginModalActive] = useState(false);


    return (
        <header>
            <div className={cl.navbar__name}>
                <img
                    alt='logo'
                    src={logo}
                    width="40px"
                />
               <h2> #ТАЩИ </h2>
            </div>

            <div className={cl.navbar__search}>
                <input
                placeholder="Поиск..."
                />
            </div>
            <div className={cl.navbar__signup} onClick={()=> {setLoginModalActive(true)}}>
                Login
            </div>
            <Modal active={loginModalActive} setActive={setLoginModalActive}>
                <SignForm></SignForm>
            </Modal>
        </header>
    );
};

export default Header;