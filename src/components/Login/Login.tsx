import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormDataType = {
    login: string,
    password: string,
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"login"}
                       component={"input"}
                       name={"login"}
                />
            </div>
            <div>
                <Field placeholder={"login"}
                       component={"input"}
                       name={"password"}
                />
            </div>
            <div>
                <Field component={"input"}
                       type={"checkbox"}
                       name={"rememberMe"}
                /> Remember Me
            </div>
            <div>
                <button>Log In</button>
            </div>
        </form>
    )}

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)



const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login