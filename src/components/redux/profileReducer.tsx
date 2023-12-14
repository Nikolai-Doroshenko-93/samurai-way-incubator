import {profileAPI, usersAPI} from "../../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = "SET-USER-PROFILE"
const SET_STATUS = "SET-STATUS"
const SAVE_PHOTO = "SAVE_PHOTO"

let initialState = {
    posts: [
        {id: 1, post: "post 1", likes: 11},
        {id: 2, post: "post 2", likes: 11},
        {id: 3, post: "post 3", likes: 11},
        {id: 4, post: "post 4", likes: 11}
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost = {
                id: state.posts.length + 1,
                post: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [newPost , ...state.posts],
            }
        }
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "SET-STATUS":
            return {
                ...state,
                status: action.status
            }
        case "SAVE_PHOTO":
            //@ts-ignore
            return {...state, profile: {photos: action.photos, ...state.profile}}
    }
    return state;
}

export const addPostActionCreator = (newPostText: string) => ({type: ADD_POST, newPostText})

export const setUserProfile = (profile: any) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status: any) => ({type: SET_STATUS, status})
export const savePhotoSuccess = (photos: any) => ({type: SAVE_PHOTO, photos})

export const getProfile = (userId: string) => async (dispatch: any) => {
   let response = await usersAPI.getProfile(userId)
            dispatch(setUserProfile(response.data))

}
export const getStatus = (userId: string) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId)
            dispatch(setStatus(response.data))
}
export const updateStatus = (status: string) => async (dispatch: any) => {
    let response = await profileAPI.updateStatus(status)
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
}
export const savePhoto = (photos: any) => async (dispatch: any) => {
    let response = await profileAPI.savePhoto(photos)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.photos))
    }
}
export const saveProfile  = (profile: any) => async (dispatch: any, getState: any) => {
    const response = await profileAPI.saveProfile(profile)
    const userId = getState().auth.id
    if (response.data.resultCode === 0) {
        dispatch(getProfile(userId))
        console.log(userId)
    } else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }
}


export default profileReducer