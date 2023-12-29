import React, {ReactComponentElement} from "react";
import styles from './FormControl.module.css'
import {required} from "../../../utils/validators/validators";
import {Field} from "redux-form";


const FormControl = ({input, meta, child, element, ...props}: any) => {

    const hasError = meta.touched && meta.error

    return  (
        <div className={styles.formControl + " " + (hasError ? styles.error :  "")}>
            <div>
                {props.children}
            </div>
        {hasError && <span>{meta.error}</span>}
    </div>
    )
}

export const TextArea = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props} ><textarea {...input} {...props} className={styles.textarea}/></FormControl>
}

export const Input = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return (<FormControl {...props}><input {...input} {...props} className={styles.input}/></FormControl>)
}

export const createField = (placeholder: any, name: string, validate: any, component: any, type?:string, text = " ") => {
    return <div>
                <Field    placeholder={placeholder}
                              name={name}
                              validate={validate}
                              component={component}
                              type={type}

                /> {text}
            </div>
}