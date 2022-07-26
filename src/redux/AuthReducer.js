import {authAPI} from "../API/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false

}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        default:
            return state;
    }

}


export const setAuthUserData = (userId, login, email, isAuth) => ({type: SET_USER_DATA, data: {userId, login, email, isAuth}})

export const getAuthUserData = ( ) => (dispatch) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(response.data.data.id,
                response.data.data.login,response.data.data.email, true));
        }
    });
}


export const login = (email, password,rememberMe ) => (dispatch) => {
    authAPI.login(email,password,rememberMe)
        .then(response => {
        if (response.data.resultCode === 0) {
         dispatch(getAuthUserData())
        }
    });
}


export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null,
                    null,null, false));
            }
        });
}




export default authReducer