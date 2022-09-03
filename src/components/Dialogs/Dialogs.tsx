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
    dialogItemData: Array<DialogItemDataPropsType>,
    messageItemData: Array<MessageItemData>
}
const Dialogs = (props: DialogsPropsType) => {


    return (
        <div className={s.dialogs__container}>
            <ul className={s.dialogs__userUl}>
                {props.dialogItemData.map((d) => <DialogItem name={d.name} id={d.id}/>)}
            </ul>
            <ul className={s.dialogs__messagesUl}>
                {props.messageItemData.map((m) => <MessageItem message={m.message} id={m.id}/>)}                                          
            </ul>
        </div>
    )
}
export default Dialogs