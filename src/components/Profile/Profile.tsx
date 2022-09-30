import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

type PostPropsType = {
  id: number,
  post: string,
  likes: number
}

type MyPostsPropsType = {
  posts: Array<PostPropsType>,
    newPostText: string
}
type StatePropsType = {
    state: MyPostsPropsType,
    addPost: () => void;
    updateNewPostText: (newText: string) => void
}


const Profile = (props: StatePropsType) => {

    return (<div className= {s.profile__container}>     
      <main >
        <ProfileInfo/>
        <MyPosts
            postsData={props.state.posts}
            // @ts-ignore
            dispatch={props.dispatch}
        />
      </main>
    </div>)
}
export default Profile;