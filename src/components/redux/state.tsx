

type dispatchType = any

export let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: "post 1", likes: 11},
                {id: 2, post: "post 2", likes: 11},
                {id: 3, post: "post 3", likes: 11},
                {id: 4, post: "post 4", likes: 11}
            ],
            newPostText: 'it-kam'
        },
        messagesPage: {
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
    },
    //@ts-ignore
    _callSubscriber(_state)  {
        console.log('state was changed')
    },
    getState() {
        return this._state;
    },
    //@ts-ignore
    subscribe(observer) {
        this._callSubscriber = observer
    },

    addPost()  {
        let newPost = {
            id: 5,
            post: this._state.profilePage.newPostText,
            likesCount: 0
        }
        // @ts-ignore
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText: any) {
        // @ts-ignore
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state);
    },
    dispatch(action: dispatchType) {
        if (action.type === "ADD-POST") {
            let newPost = {
                id: 5,
                post: this._state.profilePage.newPostText,
                likesCount: 0
            }
            // @ts-ignore
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === "UPDATE-NEW-POST-TEXT"){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messagesPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            let body = this._state.messagesPage.newMessageBody;
            this._state.messagesPage.newMessageBody = "";
            this._state.messagesPage.dialogs.push({id: 6, name: body})
            this._callSubscriber(this._state);
        }

    }
}
const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
const SEND_MESSAGE = "SEND-MESSAGE"

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text: any) => ({
        type: UPDATE_NEW_POST_TEXT, newText: text})

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body: any) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body})
//@ts-ignore
window.store = store;


