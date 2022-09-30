import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from './components/redux/state'
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={store.getState()}
                // @ts-ignore
                dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>,document.getElementById('root')
    );
}
// @ts-ignore
rerenderEntireTree();
store.subscribe(rerenderEntireTree)
