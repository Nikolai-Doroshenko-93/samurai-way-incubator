import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom'
const Dialogs = () => {
    return (
        <div className={s.dialogs__container}>
            <ul className={s.dialogs__userUl}>
                <li className={s.dialogs__userUl__li + ' ' + s.dialogs__userUl__liActive}>
                    <NavLink to="/dialogs/1">Sveta</NavLink> 
                </li>
                <li className={s.dialogs__userUl__li}>
                    <NavLink to="/dialogs/2">Dima</NavLink> 
                </li>
                <li className={s.dialogs__userUl__li}>
                    <NavLink to="/dialogs/3">Victor</NavLink>
                </li>
                <li className={s.dialogs__userUl__li}>
                    <NavLink to="/dialogs/4">Katya</NavLink>
                </li>
                <li className={s.dialogs__userUl__li}>
                    <NavLink to="/dialogs/5">Lera</NavLink>
                </li>
                <li className={s.dialogs__userUl__li}>
                    <NavLink to="/dialogs/6">Sasha</NavLink>
                </li>
            </ul>
            <ul className={s.dialogs__messagesUl}>
                <li className={s.dialogs__messagesUl__li}>
                    Hi
                </li>
                <li className={s.dialogs__messagesUl__li}>
                    How are you
                </li>
                <li className={s.dialogs__messagesUl__li}>
                    Good
                </li>
                <li className={s.dialogs__messagesUl__li}>
                    And you?
                </li>
                <li className={s.dialogs__messagesUl__li}>
                    Bad
                </li>
            </ul>
        </div>
    )
}
export default Dialogs