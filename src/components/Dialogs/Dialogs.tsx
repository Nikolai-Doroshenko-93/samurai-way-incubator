import React from "react";
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from "./MessageItem/MessageItem";


type DialogItemDataPropsType = {
    name: string,
    id: number
}
type MessageItemData = {
    id: number,
    message: string
}

type DialogsPropsType = {
    dialogs: Array<DialogItemDataPropsType>,
    messages: Array<MessageItemData>
}
type StatePropsType = {
    state: DialogsPropsType
}
const Dialogs = (props: StatePropsType) => {


    return (
        <div className={s.dialogs__container}>
            <ul className={s.dialogs__userUl}>
                {props.state.dialogs.map((d,index) =>
                    <DialogItem name={d.name}
                                id={d.id}
                                key={index}
                    />)}
            </ul>
            <ul className={s.dialogs__messagesUl}>
                {props.state.messages.map((m, index) =>
                    <MessageItem message={m.message}
                                 id={m.id}
                                 key={index}
                    />)}
            </ul>
        </div>
    )
}
export default Dialogs