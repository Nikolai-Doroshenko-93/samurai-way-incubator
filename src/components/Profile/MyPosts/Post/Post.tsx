import React from "react";
import s from './Post.module.css'

type PostPropsType = {
    id: number,
    post: string,
    likes: number
}

const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <img className={s.item__avatar} src="https://vtemu.by/wp-content/uploads/2016/01/0-16.jpg"/>
            <span>{props.post}</span>
            <div>
                <span>like</span>
                <span>{props.likes}</span>
            </div>
        </div>
    )
}

export default Post