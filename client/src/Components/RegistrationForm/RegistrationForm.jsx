import React, {useState} from 'react';
import cl from './RegistrationForm.module.css'
import {registration} from "../../http/userAPI";
import {useDispatch, useSelector} from "react-redux";

const RegistrationForm = () => {

    const dispatch = useDispatch();
    const login = useSelector(state => state.user.login)

    const [userInput, setUserInput] = useState({
        email: '',
        login: '',
        password: '',
        name: '',
        surname: '',
        age: '',
    })

    const [serverMessage, setServerMessage] = useState('');

        const signIn = async (userInput) => {
            console.log(userInput);
            const response = await registration(userInput.email, userInput.login, userInput.password, userInput.surname, userInput.name, userInput.age)
            console.log(response);
            setUserInput({
                email: '',
                login: '',
                password: '',
                name: '',
                surname: '',
                age: '',
            });
            setServerMessage(response.data.text);
        }


        return (
        <form className={cl.registration}>
            <h2> Регистрация </h2>
            <input
                placeholder="Email..."
                value={userInput.email}
                onChange={e => setUserInput({...userInput, email: e.target.value})}
            />
            <input
                placeholder="Логин..."

                value={userInput.login}
                onChange={e => setUserInput({...userInput, login: e.target.value})}
            />
            <input

                value={userInput.password}
                onChange={e => setUserInput({...userInput, password: e.target.value})}
                placeholder="Пароль..."
            />
            <input

                value={userInput.name}
                onChange={e => setUserInput({...userInput, name: e.target.value})}
                placeholder="Имя..."
            />
            <input

                value={userInput.surname}
                onChange={e => setUserInput({...userInput, surname: e.target.value})}
                placeholder="Фамилия..."
            />
            <input

                value={userInput.age}
                onChange={e => setUserInput({...userInput, age: e.target.value})}
                placeholder="Возраст..."
            />
            {
                serverMessage !== '' &&
                <h4> {serverMessage} </h4>
            }
            <button onClick={(e)=> {
                signIn(userInput);
                e.preventDefault()
            }}> Готово! </button>

        </form>
    );
};

export default RegistrationForm;