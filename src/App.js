import React, {useEffect} from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BtnUp from "./components/BtnUp";
import CryptoJS from 'crypto-js';
import {Cookies, useCookies} from 'react-cookie';
import {useDispatch} from "react-redux";
import {sendOrder} from "./actions/order";
import {sendGuest} from "./actions/guest";
import AddCookies from "./components/AddCookies";
import { ToastContainer } from 'react-toastify';
import './css/ReactToastify.css';


function App() {

    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
            <ToastContainer />
            <BtnUp />
            <Footer/>
            <AddCookies />
        </BrowserRouter>
    );
}

export default App;
