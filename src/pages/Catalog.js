import React, {useEffect} from 'react';
import Breadcrumbs from "../components/Breadcrumbs";
import Listing from "../components/Listing";
import {useLocation} from "react-router-dom";
import {Helmet} from "react-helmet";

const Catalog = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Межкомнатные Двери - Каталог - АрсеналСтрой</title>
                <meta
                    name="description"
                    content="Компания ООО АрсеналСтрой с 2008 г. производит межкомнатные двери Арсенал в Санкт-Петербурге и имеет безупречную репутацию."
                />
            </Helmet>
            <Breadcrumbs />
            <Listing />
        </div>
    );
};

export default Catalog;