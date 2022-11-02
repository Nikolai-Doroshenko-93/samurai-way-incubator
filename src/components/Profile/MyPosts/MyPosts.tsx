import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../redux/profileReducer'

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

    let newPostElement:React.RefObject<HTMLTextAreaElement> = React.createRef()

    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current?.value;
        props.updateNewPostText(text)
    }
    return (<div className={s.my_posts}>
        <div>
          <textarea
              className={s.textarea}
              ref={newPostElement}
              onChange={onPostChange}
          />
        </div>
        <div>
          <button
              type='button'
              onClick={onAddPost}>
              Add new post
          </button>
        </div>
        <div className={s.posts_block}>
        
          {postsElement}
        </div>
    </div>)
}
export default MyPosts;