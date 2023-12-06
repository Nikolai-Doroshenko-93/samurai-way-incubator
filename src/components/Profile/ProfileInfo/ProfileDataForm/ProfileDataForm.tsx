import React from "react";
import {Contact} from "../ProfileInfo";
import {createField, Input, TextArea} from "../../../common/FormControls/FormControls";
import {reduxForm} from "redux-form";


const ProfileDataForm = (props: any) => {
    return <form onSubmit={props.handleSubmit}>
            <div>
            <div><button>save</button></div>

            <p><b>Full Name</b>:{createField("Full name", "fullName", [], <Input/>, "input")}</p>
            <div>
                <b>Looking for a job?</b>: {createField("", "lookingForAJob", [], <Input/>, "checkbox", "")}
            </div>
            { props.profile.lookingForAJob &&
                <div>
                    <b>Professional skills</b>: {createField("Professional skills", "lookingForAJobDescription", [], <TextArea/>, "")}
                </div>
            }
            <div>
                <b>About Me</b>: {createField("About me", "aboutMe", [], <TextArea/>, "")}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
            })}
            </div>
        </div>
    </form>

}

const ProfileDataReduxForm = reduxForm<any>({
        form: 'edit-profile'
    })(ProfileDataForm)



// const ProfileDataFormFinally = (profile: any) => {
//     //@ts-ignore
//     return <ProfileDataReduxForm profile={profile}/>
// }
export default ProfileDataReduxForm