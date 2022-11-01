import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../redux/profileReducer'
import MyPosts from "./MyPosts";

type PostPropsType = {
      id: number,
      post: string,
      likes: number
}

type MyPostsPropsType = {
    postsData: Array<PostPropsType>,
    newPostText: string,
    addPost: () => void;
    updateNewPostText: (newText: string) => void
}


const MyPostsContainer = (props: MyPostsPropsType) => {
    // @ts-ignore
    let state = props.store.getState()

    let addPost = () => {
        // @ts-ignore
        props.store.dispatch(addPostActionCreator());

    }
    let onPostChange = (text: string) => {
        // @ts-ignore
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }
    return (
        //@ts-ignore
        <MyPosts
            updateNewPostText={onPostChange}
            addPost = {addPost}
            //@ts-ignore
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
        />
    )
}
export default MyPostsContainer;