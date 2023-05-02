import {authAPI} from "../../api/api";
import {AnyAction, Dispatch} from "redux";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA"


let initialState = {
        id: null,
        email: null,
        login: null,
        isAuth: false
}

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_USER_DATA :
            return {
                ...state,
                ...action.payload
                }
        default:
            return state;
    }
}

export const setAuthUserData = (id: string | null, email: string | null, login: string | null, isAuth: boolean) => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}})

export const getAuthUserData = () => (dispatch: Dispatch) => {
    return authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        });
}

export const login = (email: string, password: string, rememberMe: string) => (dispatch: any) => {

    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                dispatch(stopSubmit("login", {_error: {message}}))
            }
        });
}
export const logout = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        });
}

export default authReducer