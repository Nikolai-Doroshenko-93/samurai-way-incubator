import React, {TextareaHTMLAttributes} from "react";
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from "./MessageItem/MessageItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../redux/dialogsReducer";
import Dialogs from "./Dialogs";


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
const DialogsContainer = (props: any) => {
    let state = props.store.getState().messagesPage
    let onNewMessageChange = (body: any) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    return (
        //@ts-ignore
       <Dialogs
           //@ts-ignore
           messagesPage={state}
           updateNewMessageBody={onNewMessageChange}
           sendMessage={onSendMessageClick}
       />
    )
}
export default DialogsContainer