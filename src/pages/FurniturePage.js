import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import Product from "../components/Product";
import ProductDoorhandle from "../components/ProductDoorhandle";

const FurniturePage = () => {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div>
            <Breadcrumbs/>
            <ProductDoorhandle/>
        </div>
    );
};

export default FurniturePage;