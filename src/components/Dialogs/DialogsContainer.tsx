import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


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
// const DialogsContainer = () => {
//
//     return (
//         //@ts-ignore
//         <StoreContext.Consumer>
//             {
//             (store) => {
//                 let state = store.getState().messagesPage
//                 let onNewMessageChange = (body: any) => {
//                     store.dispatch(updateNewMessageBodyCreator(body))
//                 }
//                 let onSendMessageClick = () => {
//
//                 }
//                 return <Dialogs
//                     messagesPage={state}
//                     updateNewMessageBody={onNewMessageChange}
//                     sendMessage={onSendMessageClick}
//                 />
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state: any) => {
    return {
        messagesPage: state.messagesPage
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {

            dispatch(sendMessageCreator())
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer