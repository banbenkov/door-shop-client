import React, {useEffect} from 'react';
import styles from '../css/style.css';
import {
    CATEGORY_DUB_ROUTE,
    CATEGORY_EKOSHPON_LIGHT_ROUTE,
    CATEGORY_EKOSHPON_ROUTE, CATEGORY_EMALIT_ROUTE,
    CATEGORY_SOSNA_ROUTE, CATEGORY_WHITE_ROUTE
} from "../utils/consts";
import {NavLink} from "react-router-dom";
import {Navigation, Pagination, Autoplay} from "swiper";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import {Swiper as Sw, SwiperSlide} from "swiper/react";


const Swiper = () => {
    return (
        <div>
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <Sw
                        spaceBetween={30}
                        centeredSlides={true}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        navigation={false}
                        loop={true}
                        modules={[Autoplay, Navigation, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="image"
                                     style={{backgroundImage: `url(images/demo/background-3.jpg)`}}></div>
                                <div className="container">
                                    <div className="row align-items-end vh-100">
                                        <div className="col-lg-8 text-black" data-swiper-parallax-x="-100%">
                                            <span className="eyebrow">Специальное предложение</span>
                                            <h1 className="mb-3 text-uppercase">для загородных домов</h1>
                                            <NavLink to={CATEGORY_SOSNA_ROUTE} className="btn btn-outline-dark">Массив
                                                сосны</NavLink>
                                            <NavLink to={CATEGORY_DUB_ROUTE} className="btn btn-outline-dark ml-1">Массив
                                                дуба</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="image"
                                     style={{backgroundImage: `url(images/demo/background-4.jpg)`}}></div>
                                <div className="container">
                                    <div className="row align-items-end vh-100">
                                        <div className="col-lg-8 text-black" data-swiper-parallax-x="-100%">
                                            <span className="eyebrow">Экошпон</span>
                                            <h1>высокого качества</h1>
                                            <NavLink to={CATEGORY_EKOSHPON_ROUTE} className="btn btn-outline-dark">Экошпон</NavLink>
                                            <NavLink to={CATEGORY_EKOSHPON_LIGHT_ROUTE} className="btn btn-outline-dark ml-1">Экошпон лайт</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="image"
                                     style={{backgroundImage: `url(images/demo/background-6.jpg)`}}></div>
                                <div className="container">
                                    <div className="row align-items-end vh-100">
                                        <div className="col-lg-8 text-black" data-swiper-parallax-x="-100%">
                                            <span className="eyebrow">Межкомнатные двери</span>
                                            <h1>в эмалите</h1>
                                            <NavLink to={CATEGORY_WHITE_ROUTE} className="btn btn-outline-dark">Белые двери</NavLink>
                                            <NavLink to={CATEGORY_EMALIT_ROUTE} className="btn btn-outline-dark ml-1">Эмалит</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Sw>
                </div>
                {/*<div className="swiper-footer">*/}
                {/*    <div className="container">*/}
                {/*        <div className="row justify-content-end align-items-center">*/}
                {/*            <div className="col-lg-6 text-right">*/}
                {/*                <div className="swiper-navigation">*/}
                {/*                    <div className="swiper-button-prev"></div>*/}
                {/*                    <div className="swiper-pagination"></div>*/}
                {/*                    <div className="swiper-button-next"></div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>

    );
};

export default Swiper;