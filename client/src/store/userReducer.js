
const user = {
    isAuth: false,
    login: '',
    id: '',
}

export const userReducer = (state = user, action) => {
    switch (action.type){
        case "LOGIN":
            return {state, isAuth: true, login: action.payload.login, id: action.payload.id }
        case "LOGOUT":
            return {state, isAuth: false}
        default:
            return state
    }
}
