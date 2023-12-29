import React from 'react';
import s from'./Navbar.module.css'
import {NavLink} from 'react-router-dom'
import {Button} from "../common/Button/Button";
import {Toggle} from "../common/Toggle/Toggle";

const Navbar = () => {
    return (
        <div className={s.nav__background}>
          <div className={s.nav__container}>
          <nav className={s.nav}>
            <ul className={s.nav__ul}>
              <li className={s.nav__ul__item}>
                <NavLink
                  to="/profile"
                  className={s.nav__ul__item__link}
                  activeClassName={s.nav__ul__item__link_active}>
                  Profile
                </NavLink>
              </li>
              <li className={s.nav__ul__item} >
                <NavLink
                  to='/dialogs'
                  className={s.nav__ul__item__link}
                  activeClassName={s.nav__ul__item__link_active}>
                  Messages
                </NavLink>
              </li>
              <li className={s.nav__ul__item}>
                <NavLink
                  to='/news'
                  className={s.nav__ul__item__link}
                  activeClassName={s.nav__ul__item__link_active}>
                  News
                </NavLink>
              </li>
              <li className={s.nav__ul__item}>
                <NavLink
                  to="/musik"
                  className={s.nav__ul__item__link}
                  activeClassName={s.nav__ul__item__link_active}>
                  Musik
                </NavLink>
              </li>
              <li className={s.nav__ul__item}>
                <NavLink
                  to="/settings"
                  className={s.nav__ul__item__link}
                  activeClassName={s.nav__ul__item__link_active}>
                  Settings
                </NavLink>
              </li>
              <li className={s.nav__ul__item}>
                <NavLink
                    to="/users"
                    className={s.nav__ul__item__link}
                    activeClassName={s.nav__ul__item__link_active}>
                  Users
                </NavLink>
              </li>
            </ul>
        </nav>
      </div>
        </div>)
}
export default Navbar;