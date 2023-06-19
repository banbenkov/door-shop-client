import React from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BtnUp from "./components/BtnUp";


function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
            <BtnUp />
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
