import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
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

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"email"}
                       component={Input}
                       name={"email"}
                       validate={[required]}
                />
            </div>
            <div>
                <Field placeholder={"password"}
                       type={"password"}
                       component={Input}
                       name={"password"}
                       validate={[required]}
                />
            </div>
            <div>
                <Field component={"input"}
                       type={"checkbox"}
                       name={"rememberMe"}
                /> Remember Me
            </div>

            { props.error &&
                <div className={style.formSummaryError}>
                    {props.error}
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