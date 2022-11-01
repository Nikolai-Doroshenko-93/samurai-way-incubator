import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './components/redux/redux-store'
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = () => {
    console.log(store)
    // @ts-ignore
    ReactDOM.render(
        <BrowserRouter>
            <App
                // @ts-ignore
                state={store.getState()}
                // @ts-ignore
                dispatch={store.dispatch.bind(store)}
                store={store}
            />
        </BrowserRouter>,document.getElementById('root')
    );
}

rerenderEntireTree();
store.subscribe(() => {
        rerenderEntireTree()
})
