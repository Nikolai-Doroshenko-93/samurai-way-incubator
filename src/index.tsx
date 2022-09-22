import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {updateNewPostText} from './components/redux/state'
import {addPost} from './components/redux/state'
import subscribe from './components/redux/state'
import {BrowserRouter} from "react-router-dom";


export let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
            />
        </BrowserRouter>,document.getElementById('root')
    );
}
// @ts-ignore
subscribe(rerenderEntireTree)
rerenderEntireTree();