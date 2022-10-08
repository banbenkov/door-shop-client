import React, {useEffect} from 'react';
import Breadcrumbs from "../components/Breadcrumbs";
import Listing from "../components/Listing";
import {useLocation} from "react-router-dom";

const Catalog = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div>
            <Breadcrumbs />
            <Listing />
        </div>
    );
};

export default Catalog;