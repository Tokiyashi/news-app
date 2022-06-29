
const user = {
    isAuth: false,
    login: '',
}

export const userReducer = (state = user, action) => {
    switch (action.type){
        case "LOGIN":
            return {state, isAuth: true}
        case "LOGOUT":
            return {state, isAuth: false}
        default:
            return state
    }
}
