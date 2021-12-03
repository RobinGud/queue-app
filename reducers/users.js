import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from "../actions/users"

const initialState = {
    users: [
        {
            id: 1,
            email: "qwe@qwe.ru",
            password: "123",
            fullname: "Мария Петрова",
            university: "ИТМО",
            facultet: "ИТИП",
            course: 1
        },
        {
            id: 2,
            email: "123@google.com",
            password: "pass",
            fullname: "Никита Иванов",
            university: "ИТМО",
            facultet: "ИТИП",
            course: 4
        }
    ],
    currentUserId: undefined
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER:
            return {...state, users: [...state.users, action.user]}
        case LOGIN_USER:
            const userId = state.users.find((item) => { return item.email == action.user.email && action.user.password == item.password})
            return {...state, currentUserId: userId}
        case LOGOUT_USER:
            return {...state, currentUserId: undefined}
        default:
            return state
    }
}