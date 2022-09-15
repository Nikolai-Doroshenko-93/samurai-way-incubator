import React from "react";



let state= {
    profilePage: {
        posts: [
            {id: 1, post: "post 1", likes: 11},
            {id: 2, post: "post 2", likes: 11},
            {id: 3, post: "post 3", likes: 11},
            {id: 4, post: "post 4", likes: 11}
        ]
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
    }
}

export let addPost = (postText: string) => {
        let newPost = {
            id: 5,
            message: postMessage,
            likesCount: 0
        }
      // @ts-ignore
    state.profilePage.posts.push(newPost);
    }
export default state