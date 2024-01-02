import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {Button} from "../common/Button/Button";

const Header = (props: any) => {
    return (<div className={s.header_container}>
        <header className={s.header_content}>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div className={s.loginContent}>{props.login}
                        <Button onClick={props.logout}
                                backgroundColor={'#ffffff'}
                                buttonTitle='Log Out'
                                color= 'black'
                                width='100px'
                        ></Button>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    </div>)
}
export default Header;