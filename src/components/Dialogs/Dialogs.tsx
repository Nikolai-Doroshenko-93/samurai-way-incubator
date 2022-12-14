import React, {TextareaHTMLAttributes} from "react";
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from "./MessageItem/MessageItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../redux/dialogsReducer";


// type DialogItemDataPropsType = {
//     name: string,
//     id: number
// }
// type MessageItemData = {
//     id: number,
//     message: string
// }
//
// type DialogsPropsType = {
//     dialogs: Array<DialogItemDataPropsType>,
//     messages: Array<MessageItemData>
//     newMessageBody: string
// }
// type StatePropsType = {
//     state: DialogsPropsType
// }
const Dialogs = (props: any) => {
    let state = props.messagesPage

    let dialogsElement = state.dialogs.map((d: any,index: any) =>
        <DialogItem name={d.name}
                    id={d.id}
                    key={index}
        />)
    let messageElement = state.messages.map((m: any, index: any) =>
        <MessageItem message={m.message}
                     id={m.id}
                     key={index}
        />)
    let newMessageBody = state.newMessageBody;
    let onNewMessageChange = (e: any) => {
        let body = e.target.value;
        //@ts-ignore
        props.updateNewMessageBody(body)
    }
    let onSendMessageClick = () => {
        //@ts-ignore
        props.sendMessage()
    }
    return (
        <div className={s.dialogs__container}>
            <ul className={s.dialogs__userUl}>
                {dialogsElement}
            </ul>
            <ul className={s.dialogs__messagesUl}>
                <div>{messageElement}</div>
                <div>
                    <div>
                        <textarea
                            value={newMessageBody}
                            placeholder="Enter yor message"
                            onChange={onNewMessageChange}
                        ></textarea>
                    </div>
                    <div>
                       <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </ul>
        </div>
    )
}
export default Dialogs