import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = (props: any) => {
    return (<div className= {s.profile__container}>
      <main >
        <ProfileInfo
            isOwner={props.isOwner}
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
            savePhoto={props.savePhoto}
            saveProfile={props.saveProfile}
        />
        <MyPostsContainer/>
      </main>
    </div>)
}
export default Profile;