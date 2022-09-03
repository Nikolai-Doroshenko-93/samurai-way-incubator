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


const MyPosts = (props: MyPostsPropsType) => {
    return (<div className={s.my_posts}>
        <div>
          <textarea className={s.textarea}></textarea>
          <button type='button'>Add new post</button>
        </div>
        <div className={s.posts_block}>
        
          {props.postsData.map(p => <Post id={p.id} post={p.post} likes={p.likes} key={p.id}/>)}
        </div>
    </div>)
}
export default MyPosts;