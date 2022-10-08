import React, {useEffect} from 'react';
import Breadcrumbs from "../components/Breadcrumbs";
import Product from "../components/Product";
import {useLocation} from "react-router-dom";


const DoorPage = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div>
            <Breadcrumbs/>
            <Product/>
        </div>
    );
};

export default DoorPage;