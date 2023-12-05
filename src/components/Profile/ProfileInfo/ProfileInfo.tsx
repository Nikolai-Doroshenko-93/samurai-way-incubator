import React, {useState} from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import userNotFoto from "../../../assets/images/userNotFoto.png";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";
import ProfileDataReduxForm from "./ProfileDataForm/ProfileDataForm";
import ProfileDataFormFinally from "./ProfileDataForm/ProfileDataForm";

const ProfileInfo = (props: any) => {

    const [editMode, setEditMode] = useState(false)

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
                    </div>
                    {editMode
                        //@ts-ignore
                        ? <ProfileDataReduxForm profile={props.profile}/>
                        : <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={() => {setEditMode(true)}}/>}
                    <ProfileStatusWithHooks
                        status={props.status}
                        updateStatus={props.updateStatus}
                    />

                </div>
            </div>
        )
    }
}

const ProfileData = (props: any) => {
    return (
        <div>
            {props.isOwner && <div><button onClick={props.goToEditMode}>edit</button></div>}

            <p><b>Full Name</b>:{props.profile.fullName}</p>
            <p>{props.profile.lookingForAJobDescription}</p>
            <div>
                <b>Looking for a job</b>: {props.profile.lookingForAJob ? "yes" : "no"}
            </div>
            { props.profile.lookingForAJob &&
                <div>
                    <b>Professional skills</b>: {props.profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>About Me</b>: {props.profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
}
export const Contact = (props: any) => {
    return <div><b>{props.contactTitle}: {props.contactValue}</b></div>
}

export default ProfileInfo