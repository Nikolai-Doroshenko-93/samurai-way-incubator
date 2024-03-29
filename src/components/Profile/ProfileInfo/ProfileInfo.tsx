import React, {useState} from "react";
// import s from './ProfileInfo.css'
import Preloader from "../../common/Preloader/Preloader";
import userNotFoto from "../../../assets/images/userNotFoto.png";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";
import ProfileDataReduxForm from "./ProfileDataForm/ProfileDataForm";
import "./ProfileInfo.css"
import {IconPhoto} from "../../../assets/icons/IconPhoto";
import {Button} from "../../common/Button/Button";


const ProfileInfo = (props: any) => {

    const [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    } else {

        const mainPhotoSelected = (e: any) => {
            if(e.target.files.length)
                props.savePhoto(e.target.files[0])
        }
        const onSubmit = (formData: any) => {
            props.saveProfile(formData).then(()=>{
                setEditMode(false)
            })

        }
        return (
            <div>
                <div className='profile__info'>
                    <div>
                    <img className='profile__info__avatar'
                         src={!props.profile.photos.large ? userNotFoto : props.profile.photos.large}
                         alt="avatar"
                    />
                        {editMode &&
                            <div className="input__wrapper">
                                <input name="file" type="file" onChange={mainPhotoSelected} id="input__file" className="input input__file" multiple/>
                                    <label htmlFor="input__file" className="input__file-button">
                                        <span className="input__file-icon-wrapper">
                                            <IconPhoto/>
                                        </span>
                                        <span className="input__file-button-text">Выберите файл</span>
                                    </label>
                            </div>
                        }
                        <ProfileStatusWithHooks
                            status={props.status}
                            updateStatus={props.updateStatus}
                        />
                    </div>
                    {editMode
                        //@ts-ignore
                        ? <ProfileDataReduxForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/>
                        : <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={() => {setEditMode(true)}}/>}

                </div>
            </div>
        )
    }
}

const ProfileData = (props: any) => {
    return (
        <div className={"profile_info__item-block"}>
            <div>&#10060;</div>
            <div>&#9989;</div>
            <div className={"profile_info__item"}>
                <p>Full Name:</p>{props.profile.fullName}
            </div>
            <div className={"profile_info__item"}>
                <p>Looking for a job:</p> {props.profile.lookingForAJob ? "yes" : "no"}
            </div>
            { props.profile.lookingForAJob &&
                <div className={"profile_info__item"}>
                    <p>Professional skills:</p> {props.profile.lookingForAJobDescription}
                </div>
            }
                <div className={"profile_info__item"}>
                    <p>About Me:</p> {props.profile.aboutMe}
                </div>
            <div>
                <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
            })}
            </div>
            {props.isOwner && <Button buttonTitle='Edit profile' width='150px' onClick={props.goToEditMode}/>}
        </div>
    )
}
export const Contact = (props: any) => {
    return <div className={"profile_info__item"}>
        <p>{props.contactTitle}</p>: {props.contactValue}
    </div>
}

export default ProfileInfo