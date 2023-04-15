import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";

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
                       component={Input}
                       name={"login"}
                       validate={[required]}
                />
            </div>
            <div>
                <Field placeholder={"login"}
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