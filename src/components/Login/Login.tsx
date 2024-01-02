import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {CheckBox, createField, Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../redux/authReducer";
import {Redirect} from "react-router-dom";
import style from "../../components/common/FormControls/FormControl.module.css"
import {Button} from "../common/Button/Button";
import s from './Login.module.css'

type FormDataType = {
    email: string,
    password: string,
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={s.loginInputsBlock}>
                {createField("Email", "email", [required], Input)}
                {createField("Password", "password", [required], Input, "password")}
                {createField(null, "rememberMe", [], CheckBox,  "checkbox", "Remember Me")}
                {error &&
                    <div className={style.formSummaryError}>
                        {error}
                    </div>
                }

                <div className={s.buttonWrapper}>
                    <Button buttonTitle={'Log In'}/>
                </div>
            </div>
        </form>
    )}

const LoginReduxForm = reduxForm<any>({
    form: 'login'
})(LoginForm)



const Login = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    } else {
        return <div>
            <h1 className={s.loginTitle}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    }
}
const mapStateToProps = (state: any) => {
return {
    isAuth: state.auth.isAuth
}
}
export default connect(mapStateToProps, {login, logout})(Login)