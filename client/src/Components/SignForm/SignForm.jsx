import React from 'react';
import {Link} from "react-router-dom";


const SignForm = () => {
    return (
        <div>
            <h2> Вход </h2>
            <input
                placeholder="Логин..."
            />
            <input
                placeholder="Пароль..."
            />
            <button> Готово! </button>
            <p> Ещё нет аккаунта? <Link to="/registration"> Зарегистрироваться </Link> </p>
        </div>
    );
};

export default SignForm;