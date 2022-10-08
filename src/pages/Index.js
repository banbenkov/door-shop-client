import React, {useEffect} from 'react';
import Swiper from "../components/Swiper";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import {useLocation} from "react-router-dom";

const Index = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div>

            <Swiper />
            <Carousel />
            <Categories />

        </div>
    );
};

export default Index;