import React from 'react'
import s from './Button.module.css'


export const Button = (props: any) => {
    const style = {
        width: props.width,
        backgroundColor: props.BgColor,
        color: props.color
    }
    return (<div style={style} className={s.wrapper}>
        <button  className={s.button} onClick={props.onClick}></button>
        <p className={s.buttonTitle}>{props.buttonTitle}</p>
    </div>)
}