import React from "react";
import s from './Post.module.css'
import {IconLikes} from "../../../../assets/icons/IconLikes";

type PostPropsType = {
    id: number,
    post: string,
    likes: number
}

const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <div className={s.itemAvatarAndLikesBlock}>
                <img className={s.itemAvatar} src="https://vtemu.by/wp-content/uploads/2016/01/0-16.jpg"/>
                <div className={s.likesBlock}>
                    <span><IconLikes/></span>
                    <span>{props.likes}</span>
                </div>
            </div>
            <div className={s.itemPostText}>
                <span>{props.post}</span>
            </div>
        </div>
    )
}

export default Post