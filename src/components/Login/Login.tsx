import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../redux/authReducer";
import {Redirect} from "react-router-dom";
import style from "../../components/common/FormControls/FormControl.module.css"

type FormDataType = {
    email: string,
    password: string,
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required], Input, {type: "password"})}
            {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "Remember Me")}
            {error &&
                <div className={style.formSummaryError}>
                    {error}
                </div>
            }
            <div>
                <button>Log In</button>
            </div>
        </form>
    )}

const LoginReduxForm = reduxForm<FormDataType>({
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
            <h1>Login</h1>
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