import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {signIn} from "../../http/userAPI";
import {useDispatch, useSelector} from "react-redux";


const SignForm = () => {

    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.user.isAuth)
    const userLogin = useSelector(state => state.user.login)
    const  [userInput, setUserInput] = useState({
        login: '',
        password: '',
    })

    const [serverMessage, setServerMessage ] = useState('')

    const login = async (userInput) => {
        console.log(userInput);
        const response = await signIn(userInput.login, userInput.password)
        console.log(response);
        setUserInput({
            login: '',
            password: '',
        });
        setServerMessage(response.data.text);

        if (response.data.text === "Авторизация выполнена"){
            dispatch({type: "LOGIN", payload: response.data.data})
        }
    }

    const logout = async (userInput) => {
        localStorage.clear();
    }

    return (
        <>
        {
            isAuth ===true
            ? <form>
                <h3>
                    Авторизация выполнена, {userLogin}, добро пожаловать на корявый сайт который сверстала криворукая макака!
                </h3>
                <button onClick={() => {
                    logout()}}> Выйти </button>
            </form>
            : <form>
                <h2> Вход </h2>
                <input
                    value={userInput.login}
                    placeholder="Логин или почтовый адрес..."
                    onChange={e => setUserInput({...userInput, login: e.target.value})}

                />
                <input
                    value={userInput.password}
                    placeholder="Пароль..."
                    onChange={e => setUserInput({...userInput, password: e.target.value})}
                />
                    <h3> {serverMessage} </h3>
                <button onClick={(e) => {
                    login(userInput);
                    e.preventDefault()
                }}> Готово!
                </button>
                <p> Ещё нет аккаунта? <Link to="/registration"> Зарегистрироваться </Link></p>
            </form>
        }
        </>
    );
};

export default SignForm;