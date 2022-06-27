import React from 'react';
import './RegistrationForm.module.css'

const RegistrationForm = () => {
    return (
        <form>
            <h2> Регистрация </h2>
            <input
                placeholder="Email..."
            />
            <input
                placeholder="Логин..."
            />
            <input
                placeholder="Пароль..."
            />
            <input
                placeholder="Имя..."
            />
            <input
                placeholder="Фамилия..."
            />
            <input
                placeholder="Возраст..."
            />
            <button> Готово! </button>

        </form>
    );
};

export default RegistrationForm;