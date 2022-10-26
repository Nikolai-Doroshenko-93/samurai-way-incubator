import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";


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
        },
        sidebar: {}
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

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state);

    }
}





//@ts-ignore
window.store = store;


