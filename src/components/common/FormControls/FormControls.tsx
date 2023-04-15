import React from "react";
import styles from './FormControl.module.css'


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
    return <FormControl {...props} ><textarea {...input} {...props}/></FormControl>
}

export const Input = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return (<FormControl {...props}><input {...input} {...props}/></FormControl>)
}