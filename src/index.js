import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {store} from "./reducers";
import {Provider} from "react-redux";
import 'bootstrap-icons/font/bootstrap-icons.css';
import {CookiesProvider} from "react-cookie";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <CookiesProvider>
            <App/>
        </CookiesProvider>
    </Provider>
);

