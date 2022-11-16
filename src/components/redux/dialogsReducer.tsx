const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
const SEND_MESSAGE = "SEND-MESSAGE"

let initialState = {
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you"},
        {id: 3, message: "Good"},
        {id: 4, message: "And you?"},
        {id: 5, message: "Bad"}
    ],
        dialogs: [
    {id: 1, name: "Sveta"},
    {id: 2, name: "Dima"},
    {id: 3, name: "Victor"},
    {id: 4, name: "Katya"},
    {id: 5, name: "Lera"},
    {id: 6, name: "Sasha"}
],
    newMessageBody: ""
}

const dialogsReducer = (state=initialState, action: any) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE: // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: "",
                messages: [...state.messages, {id: 6, message: body}]
            };
    }
    return state;
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body: any) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body})
export default dialogsReducer