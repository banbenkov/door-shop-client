import React, {useEffect} from 'react';
import Breadcrumbs from "../components/Breadcrumbs";
import {useLocation} from "react-router-dom";
import ListingFurniture from "../components/ListingFurniture";
import {Helmet} from "react-helmet";

const CatalogFurniture = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Фурнитура - АрсеналСтрой</title>
                <meta
                    name="description"
                    content="Компания ООО АрсеналСтрой с 2008 г. производит межкомнатные ламинированные двери Арсенал в Санкт-Петербурге и имеет безупречную репутацию."
                />
            </Helmet>
            <Breadcrumbs />
            <ListingFurniture />
        </div>
    );
};

export default CatalogFurniture;