import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../../utils/validators/validators";
import {createField, Input, TextArea} from "../../common/FormControls/FormControls";

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


const MyPosts = React.memo((props: any) => {
    let postsElement =
        //@ts-ignore
        [...props.posts]
            .reverse()
            .map((p: any) =>
            <Post id={p.id} post={p.post} likes={p.likes} key={p.id}/>)

    let addPost = (values: any) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.myPostsWrapper}>
            <AddPostFormRedux onSubmit={addPost}/>
            <div className={s.postsBlock}>
                {postsElement}
            </div>
        </div>
    )
});


const maxLength16 = maxLengthCreator(16)
const minLength8 = minLengthCreator(4)

const AddPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.addPostInput}>
                {createField('write post', "newPostText", [minLength8, maxLength16], Input, "")}
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