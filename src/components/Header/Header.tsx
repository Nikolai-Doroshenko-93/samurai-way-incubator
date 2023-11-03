import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props: any) => {
    return (<div className={s.header_container}>
        <header className={s.header_content}>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log Out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    </div>)
}
export default Header;