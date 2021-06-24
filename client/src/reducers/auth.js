import { AUTH, LOGOUT } from '../constants/actionTypes'

const authReducer = (state={ authData: null }, action) => {
    switch (action.type) {
        case LOGOUT:
            localStorage.clear()
            return { ...state, authData: null }
        case AUTH:
            // console.log(action.data)
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }))
            return { ...state, authData: action?.data }
        default:
            return state
    }
}

export default authReducer