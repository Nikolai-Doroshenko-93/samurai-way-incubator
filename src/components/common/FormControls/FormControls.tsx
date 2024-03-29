import React, {ReactComponentElement} from "react";
import styles from './FormControl.module.css'
import {required} from "../../../utils/validators/validators";
import {Field} from "redux-form";
import './Toggle.css'


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
export const CheckBox = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return (<FormControl {...props}>
        <div className="toggle-container">
            <input {...input} {...props} className="toggle-input" type="checkbox"/>
            <svg className="toggle" viewBox="0 0 292 142" xmlns="http://www.w3.org/2000/svg">
                <path className="toggle-background"
                      d="M71 142C31.7878 142 0 110.212 0 71C0 31.7878 31.7878 0 71 0C110.212 0 119 30 146 30C173 30 182 0 221 0C260 0 292 31.7878 292 71C292 110.212 260.212 142 221 142C181.788 142 173 112 146 112C119 112 110.212 142 71 142Z"/>
                <rect className="toggle-icon on" x="64" y="39" width="12" height="64" rx="6"/>
                <path className="toggle-icon off" fill-rule="evenodd"
                      d="M221 91C232.046 91 241 82.0457 241 71C241 59.9543 232.046 51 221 51C209.954 51 201 59.9543 201 71C201 82.0457 209.954 91 221 91ZM221 103C238.673 103 253 88.6731 253 71C253 53.3269 238.673 39 221 39C203.327 39 189 53.3269 189 71C189 88.6731 203.327 103 221 103Z"/>
                <g filter="url('#goo')">
                    <rect className="toggle-circle-center" x="13" y="42" width="116" height="58" rx="29"
                          fill="#fff"/>
                    <rect className="toggle-circle left" x="14" y="14" width="114" height="114" rx="58"
                          fill="#fff"/>
                    <rect className="toggle-circle right" x="164" y="14" width="114" height="114" rx="58"
                          fill="#fff"/>
                </g>
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"/>
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                                   result="goo"/>
                </filter>
            </svg>
        </div>
    </FormControl>)
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