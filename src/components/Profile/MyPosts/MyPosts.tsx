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
}

// let postsData = [
//   {id: 1, post: "post 1", likes: 11},
//   {id: 2, post: "post 2", likes: 11},
//   {id: 3, post: "post 3", likes: 11},
//   {id: 4, post: "post 4", likes: 11}
// ]
const MyPosts = (props: MyPostsPropsType) => {
    return (<div className={s.my_posts}>
        <div>
          <textarea className={s.textarea}></textarea>
          <button type='button'>Add new post</button>
        </div>
        <div className={s.posts_block}>
        
          {props.postsData.map(p => <Post id={p.id} post={p.post} likes={p.likes}/>)}
        </div>
    </div>)
}
export default MyPosts;