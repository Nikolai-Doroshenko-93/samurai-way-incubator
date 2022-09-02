import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


let postsData = [
  {id: 1, post: "post 1", likes: 11},
  {id: 2, post: "post 2", likes: 11},
  {id: 3, post: "post 3", likes: 11},
  {id: 4, post: "post 4", likes: 11}
]

const Profile = () => {

 
    return (<div className= {s.profile__container}>     
      <main >
        <ProfileInfo/>
        <MyPosts postsData={postsData}/>
      </main>
    </div>)
}
export default Profile;