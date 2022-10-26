import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../redux/profileReducer'

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


const MyPosts = (props: MyPostsPropsType) => {

    let newPostElement:React.RefObject<any> = React.createRef()

    let addPost = () => {
        // @ts-ignore
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        // @ts-ignore
        props.dispatch(updateNewPostTextActionCreator(text))
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
              onClick={addPost}>
              Add new post
          </button>
        </div>
        <div className={s.posts_block}>
        
          {props.postsData.map(p => <Post id={p.id} post={p.post} likes={p.likes} key={p.id}/>)}
        </div>
    </div>)
}
export default MyPosts;