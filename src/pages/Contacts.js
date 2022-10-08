import React, {useEffect} from 'react';
import Info from "../components/Info";
import {useLocation} from "react-router-dom";

const Contacts = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <Info />

    );
};

export default Contacts;