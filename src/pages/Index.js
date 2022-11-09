import React, {useEffect} from 'react';
import Swiper from "../components/Swiper";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import {useLocation} from "react-router-dom";
import {Helmet} from "react-helmet";

const Index = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>{`Интернет магазин - АрсеналСтрой`}</title>
                <meta
                    name="description"
                    content="Компания ООО АрсеналСтрой с 2008 г. производит межкомнатные ламинированные двери Арсенал в Санкт-Петербурге и имеет безупречную репутацию."
                />
            </Helmet>
            <Swiper />
            <Carousel />
            <Categories />

        </div>
    );
};

export default Index;