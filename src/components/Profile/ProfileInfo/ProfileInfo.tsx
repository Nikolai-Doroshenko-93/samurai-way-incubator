import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import userNotFoto from "../../../assets/images/userNotFoto.png";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = (props: any) => {
    if (!props.profile) {
        return <Preloader/>
    } else {

        const mainPhotoSelected = (e: any) => {
            if(e.target.files.length)
                props.savePhoto(e.target.files[0])
        }
        return (
            <div>
                <div>
                    {/*<img className={s.profile__background}*/}
                    {/*     src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg" alt="background"*/}
                    {/*/>*/}
                </div>
                <div className={s.profile__info}>
                    <div>
                    <img className={s.profile__info__avatar}
                         src={!props.profile.photos.large ? userNotFoto : props.profile.photos.large}
                         alt="avatar"
                    />
                    {props.isOwner && <input type={"file"} onChange={mainPhotoSelected}/>}
                    {console.log(props.isOwner)}
                    </div>
                    <div>
                        <p>{props.profile.fullName}</p>
                        <p>{props.profile.lookingForAJobDescription}</p>
                        <ProfileStatusWithHooks
//@ts-ignore
                            status={props.status}
                            updateStatus={props.updateStatus}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileInfo