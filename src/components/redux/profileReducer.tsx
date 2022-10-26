const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

const profileReducer = (state: any, action: any) => {


    switch (action.type) {
        case "ADD-POST":
            let newPost = {
                id: 5,
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