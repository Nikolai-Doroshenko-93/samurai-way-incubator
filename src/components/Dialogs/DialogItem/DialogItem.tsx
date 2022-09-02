import React from "react";
import {NavLink} from 'react-router-dom'
import s from './DialogItem.module.css'

type DialogItemPropsType = {
    name: string,
    id: number
}

const DialogItem = (props: DialogItemPropsType )=> {

    let path = "/dialogs/" + props.id

    return (
        <li className={s.dialogs__userUl__li + ' ' + s.dialogs__userUl__liActive}>
            <NavLink to={path}>{props.name}</NavLink> 
        </li>
    )
}
export default DialogItem