import {profileAPI, usersAPI} from "../../api/api";
import {getAuthUserData} from "./authReducer";

const SET_INITIALIZED_SUCCESs = "SET_INITIALIZED_SUCCESS"



let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_INITIALIZED_SUCCESs: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
        }
    }
export const initializedSuccess = () => ({type: SET_INITIALIZED_SUCCESs})

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData())
        Promise.all([promise])
            .then(
            dispatch(initializedSuccess())
        )

}


export default appReducer