import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'

type PostPropsType = {
      id: number,
      post: string,
      likes: number
}

type MyPostsPropsType = {
    postsData: Array<PostPropsType>
    addPost: (postText: string) => void;
}


const MyPosts = (props: MyPostsPropsType) => {

    let newPostElement:React.RefObject<any> = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }

    return (<div className={s.my_posts}>
        <div>
          <textarea
              className={s.textarea}
              ref={newPostElement}>
          </textarea>
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