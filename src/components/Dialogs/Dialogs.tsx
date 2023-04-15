import React from "react";
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from "./MessageItem/MessageItem";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";


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

    if (props.isAuth) return <Redirect to={("/login")}/>

    let addNewMessage = (values: any) => {
        alert(values.newMessageBody);
        props.sendMessage(values.newMessageBody)
    }
    return (
        <div className={s.dialogs__container}>
            <ul className={s.dialogs__userUl}>
                {dialogsElement}
            </ul>
            <ul className={s.dialogs__messagesUl}>
                <div>{messageElement}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </ul>
        </div>
    )
}

const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
                <div>
                    <Field
                        component={'textarea'}
                        name={'newMessageBody'}
                        placeholder="Enter yor message"
                    ></Field>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs