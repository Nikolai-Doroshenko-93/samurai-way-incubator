import {profileAPI, usersAPI} from "../../api/api";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET-USER-PROFILE"
const SET_STATUS = "SET-STATUS"

let initialState = {
    posts: [
        {id: 1, post: "post 1", likes: 11},
        {id: 2, post: "post 2", likes: 11},
        {id: 3, post: "post 3", likes: 11},
        {id: 4, post: "post 4", likes: 11}
    ],
    newPostText: 'it-kam',
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost = {
                id: state.posts.length + 1,
                post: state.newPostText,
                likesCount: 0
            }
            // let stateCopy = {...state}
            // stateCopy.posts = [...state.posts]
            // // @ts-ignore
            // stateCopy.posts.unshift(newPost);
            // stateCopy.newPostText = '';
            return {
                ...state,
                posts: [newPost , ...state.posts],
                newPostText: ''
            }
        }
        case "UPDATE-NEW-POST-TEXT": {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "SET-STATUS":
            return {
                ...state,
                status: action.status
            }
    }
    return state;
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: any) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile: any) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status: any) => ({type: SET_STATUS, status})

export const getProfile = (userId: string) => (dispatch: any) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        });
}
export const getStatus = (userId: string) => (dispatch: any) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        });
}
export const updateStatus = (status: string) => (dispatch: any) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        });
}


export default profileReducer