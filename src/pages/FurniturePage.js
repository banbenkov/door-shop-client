import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import Product from "../components/Product";
import ProductFurniture from "../components/ProductFurniture";
import {useSelector} from "react-redux";
import {Helmet} from "react-helmet";

const FurniturePage = () => {
    const {pathname} = useLocation();
    const title = useSelector(state => state.furnitureDetail.furniture.title);

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
            <ProductFurniture/>
        </div>
    );
};

export default FurniturePage;