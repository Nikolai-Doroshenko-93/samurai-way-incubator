import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../redux/profileReducer'
import MyPosts from "./MyPosts";

// type PostPropsType = {
//       id: number,
//       post: string,
//       likes: number
// }
//
// type MyPostsPropsType = {
//     postsData: Array<PostPropsType>,
//     newPostText: string,
//     addPost: () => void;
//     updateNewPostText: (newText: string) => void
// }


const MyPostsContainer = (props: any) => {
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());

    }
    let onPostChange = (text: string) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }
    return (

        <MyPosts
            updateNewPostText={onPostChange}
            addPost = {addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
        />
    )
}
export default MyPostsContainer;