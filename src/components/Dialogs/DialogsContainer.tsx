import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";


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
        messagesPage: state.messagesPage,
        isAuth: state.auth.isAuth
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
let AuthRedirectComponent = WithAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer