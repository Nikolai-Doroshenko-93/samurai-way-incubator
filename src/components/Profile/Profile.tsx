import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (<div className= {s.profile__container}>     
      <main >
        <div>
          <img className={s.profile__background} src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg"/>
        </div>
        <div className={s.profile__info}>
          <img className={s.profile__info__avatar} src='https://avatarko.ru/img/kartinka/2/zhivotnye_kot_prikol_ochki_1637.jpg'/>
          <p>discription discription discription discription discription </p>
        </div>
        <MyPosts/>
      </main>
    </div>)
}
export default Profile;