const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET-USER-PROFILE"

let initialState = {
    posts: [
        {id: 1, post: "post 1", likes: 11},
        {id: 2, post: "post 2", likes: 11},
        {id: 3, post: "post 3", likes: 11},
        {id: 4, post: "post 4", likes: 11}
    ],
    newPostText: 'it-kam',
    profile: null
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
    }

    return state;
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text: any) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text})

export const setUserProfile = (profile: any) => ({type: SET_USER_PROFILE, profile})

export default profileReducer