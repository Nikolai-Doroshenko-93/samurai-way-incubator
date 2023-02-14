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
                ...action.data,
                isAuth: true
                }
        default:
            return state;
    }
}

export const setAuthUserData = (id: string, email: string, login: string) => ({type: SET_USER_DATA, data: {id, email, login}})


export default authReducer