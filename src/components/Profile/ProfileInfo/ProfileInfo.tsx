import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.profile__background} src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg" alt="background"/>
            </div>
            <div className={s.profile__info}>
                <img className={s.profile__info__avatar} src='https://avatarko.ru/img/kartinka/2/zhivotnye_kot_prikol_ochki_1637.jpg' alt="avatar"/>
                <p>discription discription discription discription discription </p>
            </div>
        </div>
    )
}

export default ProfileInfo