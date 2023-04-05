import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = (props: any) => {
    return (<div className= {s.profile__container}>
      <main >
        <ProfileInfo
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
        />
        <MyPostsContainer/>
      </main>
    </div>)
}
export default Profile;