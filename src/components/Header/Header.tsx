import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props: any) => {
    return (<div className={s.header_container}>
        <header >
            <div>header</div>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    </div>)
}
export default Header;