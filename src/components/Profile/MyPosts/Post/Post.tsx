import React from "react";
import s from './Post.module.css'


const Post = () => {
    return (
        <div className={s.item}>
            <img className={s.item__avatar} src="https://vtemu.by/wp-content/uploads/2016/01/0-16.jpg"/>
            post post post
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post