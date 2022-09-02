import React from 'react'
import s from './MessageItem.module.css'


type MessagePropsType = {
    id: number,
    message: string
}

const MessageItem = (props: MessagePropsType)=> {
    return (
        <li className={s.dialogs__messagesUl__li} key={props.id}>
            {props.message}
        </li> 
    )
}

export default MessageItem
