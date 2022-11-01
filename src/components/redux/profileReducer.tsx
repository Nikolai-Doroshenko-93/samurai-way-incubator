const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialState = {
    posts: [
        {id: 1, post: "post 1", likes: 11},
        {id: 2, post: "post 2", likes: 11},
        {id: 3, post: "post 3", likes: 11},
        {id: 4, post: "post 4", likes: 11}
    ],
    newPostText: 'it-kam'
}

const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost = {
                id: state.posts.length+1,
                post: state.newPostText,
                likesCount: 0
            }
            // @ts-ignore
            state.posts.push(newPost);
            state.newPostText = '';
            break;
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText;
            break;
    }

    return state;
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text: any) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer