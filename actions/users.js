export const REGISTER_USER = 'REGISTER_USER'
export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

export const registerUser = (email, password) => {
    let user= {email, password}
    user.id = Math.floor(Math.random() * 100000000)
    user.fullname = "Аноним"
    user.university = ""
    user.facultet = ""
    user.course = undefined
    return { type: REGISTER_USER, user: user };
}

export const loginUser = (email, password) => {
    return { type: LOGIN_USER, user: {email, password} };
}

export const logoutUser = () => {
    return { type: LOGOUT_USER };
}