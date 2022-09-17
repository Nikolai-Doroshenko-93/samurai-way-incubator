import ReactDOM from "react-dom";
import App from "./App";
import state, {addPost} from "./components/redux/state";
import React from "react";
import {BrowserRouter} from "react-router-dom";


export let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
            />
        </BrowserRouter>,document.getElementById('root')
    );
}