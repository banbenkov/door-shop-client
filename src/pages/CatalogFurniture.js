import React, {useEffect} from 'react';
import Breadcrumbs from "../components/Breadcrumbs";
import {useLocation} from "react-router-dom";
import ListingFurniture from "../components/ListingFurniture";

const CatalogFurniture = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div>
            <Breadcrumbs />
            <ListingFurniture />
        </div>
    );
};

export default CatalogFurniture;