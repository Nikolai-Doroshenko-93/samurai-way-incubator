import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './components/redux/redux-store'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


    // @ts-ignore
ReactDOM.render(
        <BrowserRouter>
            <Provider
                // @ts-ignore
                store={store}>
            <
                // @ts-ignore
                App/>
            </Provider>
        </BrowserRouter>,document.getElementById('root'));

