import React from 'react';
import {addPostActionCreator} from '../../redux/profileReducer'
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

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


// const MyPostsContainer = () => {
//     return (
//         <Consumer>
//             {
//                 (store) => {
//                     let state = store.getState()
//                     let addPost = () => {
//                         store.dispatch(addPostActionCreator());
//                     }
//                     let onPostChange = (text: string) => {
//                         store.dispatch(updateNewPostTextActionCreator(text))
//                     }
//                     return  <MyPosts
//                         updateNewPostText={onPostChange}
//                         addPost={addPost}
//                         posts={state.profilePage.posts}
//                         newPostText={state.profilePage.newPostText}
//                     />
//                 }
//             }
//         </Consumer>
//     )
// }
const mapStateToProps = (state: any) => {
    return {
        posts: state.profilePage.posts,
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;