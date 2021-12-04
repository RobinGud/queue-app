import { REGISTER_USER, LOGIN_USER, LOGOUT_USER, UPDATE_USER } from "../actions/users"

const initialState = {
    users: [
        {
            id: 1,
            email: "qwe@qwe.ru",
            password: "123",
            fullname: "Никита Петров",
            university: "Университет ИТМО",
            facultet: "Факультет информационных технологий и программирования",
            course: 1
        },
        {
            id: 2,
            email: "123@google.com",
            password: "pass",
            fullname: "Мария Петрова",
            university: "Университет ИТМО",
            facultet: "Факультет информационных технологий и программирования",
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
            const user = state.users.find((item) => { return item.email == action.user.email && action.user.password == item.password})
            const userId = user.id
            return {...state, currentUserId: userId}
        case LOGOUT_USER:
            return {...state, currentUserId: undefined}
        case UPDATE_USER:
            let users = state.users.filter(value => {return value.id != state.currentUserId})
            let updatedUser = action.user
            updatedUser.id = state.currentUserId
            users.push(updatedUser)
            return {...state, users: [...users]}
        default:
            return state
    }
}