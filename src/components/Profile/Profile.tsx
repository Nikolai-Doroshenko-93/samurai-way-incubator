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
  postsData: Array<PostPropsType>
}



const Profile = (props: MyPostsPropsType) => {

    return (<div className= {s.profile__container}>     
      <main >
        <ProfileInfo/>
        <MyPosts postsData={props.postsData}/>
      </main>
    </div>)
}
export default Profile;