import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (<div className={s.my_posts}>
        <div>
          <textarea className={s.textarea}></textarea>
          <button type='button'>Add new post</button>
        </div>
        <div className={s.posts_block}>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </div>
    </div>)
}
export default MyPosts;