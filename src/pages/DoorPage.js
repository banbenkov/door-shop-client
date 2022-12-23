import React, {useEffect} from 'react';
import Breadcrumbs from "../components/Breadcrumbs";
import Product from "../components/Product";
import {useLocation} from "react-router-dom";
import {Helmet} from "react-helmet";
import {useSelector} from "react-redux";


const DoorPage = () => {
    const { pathname } = useLocation();
    const title = useSelector(state => state.doorDetail.door.title);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>{`${title} - АрсеналСтрой`}</title>
                <meta
                    name="description"
                    content="Компания ООО АрсеналСтрой с 2008 г. производит межкомнатные двери Арсенал в Санкт-Петербурге и имеет безупречную репутацию."
                />
            </Helmet>
            <Breadcrumbs/>
            <Product/>
        </div>
    );
};

export default DoorPage;