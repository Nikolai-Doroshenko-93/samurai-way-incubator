import React from "react";
import {Contact} from "../ProfileInfo";
import {createField, Input, TextArea} from "../../../common/FormControls/FormControls";
import {reduxForm} from "redux-form";
import style from "../../../common/FormControls/FormControl.module.css";
import {Button} from "../../../common/Button/Button";


const ProfileDataForm = (props: any) => {
    return <form onSubmit={props.handleSubmit}>
            {props.error &&
            <div className={style.formSummaryError}>
                {props.error}
            </div>
        }
            <div className={style.boxFormItem}>
                <b>Full Name</b>:{createField("Full name", "fullName", [], Input, "input")}
            </div>
            <div className={style.boxFormItem}>
                <b>Looking for a job?</b>: {createField("", "lookingForAJob", [], Input, "checkbox", "")}
            </div>
        {/*{ props.profile.lookingForAJob &&*/}
                <div className={style.boxFormItem}>
                    <b>Professional skills</b>: {createField("Professional skills", "lookingForAJobDescription", [], Input, "")}
                </div>
            <div className={style.boxFormItem}>
                <b>About Me</b>: {createField("About me", "aboutMe", [], Input, "")}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
                return <div key={key} className={style.boxFormItem}>
                    <b>{key}: {createField(key, "contacts." + key, [], Input, "input")}</b>
                </div>
            })}
            </div>
        <div className={style.boxForSaveButton}>
            <Button buttonTitle='Save' width='150px'  backgroundColor='#82B440'/>
        </div>
    </form>
}

const ProfileDataReduxForm = reduxForm<any>({
        form: 'edit-profile'
    })(ProfileDataForm)




export default ProfileDataReduxForm
