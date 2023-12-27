import React, {useState} from "react";
// import s from './ProfileInfo.css'
import Preloader from "../../common/Preloader/Preloader";
import userNotFoto from "../../../assets/images/userNotFoto.png";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";
import ProfileDataReduxForm from "./ProfileDataForm/ProfileDataForm";
import "./ProfileInfo.css"
import Icons from "../../../assets/icons";

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
                <div>
                    {/*<img className={s.profile__background}*/}
                    {/*     src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg" alt="background"*/}
                    {/*/>*/}
                </div>
                <div className='profile__info'>
                    <div>
                    <img className='profile__info__avatar'
                         src={!props.profile.photos.large ? userNotFoto : props.profile.photos.large}
                         alt="avatar"
                    />
                        {props.isOwner &&
                            <div className='input_select_photo__wrapper'>
                                <input type={"file"} onChange={mainPhotoSelected} id='input_select_photo'/>

                            </div>}
                        {props.isOwner &&
                            <div className="input__wrapper">
                                <input name="file" type="file" id="input__file" className="input input__file" multiple/>
                                    <label htmlFor="input__file" className="input__file-button">
                                        <span className="input__file-icon-wrapper">
                                            <Icons className="input__file-icon"
                                            name={'input_select_photo'}
                                            color="rgb(106, 247, 151)"
                                            size={"25px"}
                                            />
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
        <div>
            {props.isOwner && <div><button onClick={props.goToEditMode}>edit</button></div>}

            <div><b>Full Name</b>:{props.profile.fullName}</div>
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
    return <div><b>{props.contactTitle}</b>: {props.contactValue}</div>
}

export default ProfileInfo