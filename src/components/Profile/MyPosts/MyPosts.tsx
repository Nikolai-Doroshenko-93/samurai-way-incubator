import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {Field, reduxForm} from "redux-form";

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


const MyPosts = (props: any) => {
    let postsElement =
        props.posts.map((p: any) =>
            <Post id={p.id} post={p.post} likes={p.likes} key={p.id}/>)

    let addPost = (values: any) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.my_posts}>
                <AddPostFormRedux onSubmit={addPost}/>
                <div className={s.posts_block}>
                  {postsElement}
                </div>
            </div>
    )
}

const AddPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={"textarea"}
                    name={"newPostText"}
                    placeholder={'write post'}
                    className={s.textarea}
                />
            </div>
            <div>
                <button>
                    Add new post
                </button>
            </div>
        </form>
    )

}
const AddPostFormRedux = reduxForm({form: 'add post'})(AddPostForm)
export default MyPosts;