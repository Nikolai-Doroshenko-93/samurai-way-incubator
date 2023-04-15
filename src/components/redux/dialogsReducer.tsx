
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
]
}

const dialogsReducer = (state=initialState, action: any) => {

    switch (action.type) {
        case SEND_MESSAGE: // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
    }
    return state;
}
export const sendMessageCreator = (newMessageBody: any) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer