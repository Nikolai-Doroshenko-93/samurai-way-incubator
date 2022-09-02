import React from "react";
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from "./MessageItem/MessageItem";


const Dialogs = () => {

    let dialogItemData = [
        {id: 1, name: "Sveta"},
        {id: 2, name: "Dima"},
        {id: 3, name: "Victor"},
        {id: 4, name: "Katya"},
        {id: 5, name: "Lera"},
        {id: 6, name: "Sasha"}
    ]
    let messageItemData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you"},
        {id: 3, message: "Good"},
        {id: 4, message: "And you?"},
        {id: 5, message: "Bad"}
    ]

    return (
        <div className={s.dialogs__container}>
            <ul className={s.dialogs__userUl}>
                {dialogItemData.map((d) => <DialogItem name={d.name} id={d.id}/>)}
            </ul>
            <ul className={s.dialogs__messagesUl}>
                {messageItemData.map((m) => <MessageItem message={m.message} id={m.id}/>)}                                          
            </ul>
        </div>
    )
}
export default Dialogs