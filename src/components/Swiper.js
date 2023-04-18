import React, {useEffect} from 'react';
import styles from '../css/style.css';
import {CATEGORY_SOSNA_ROUTE} from "../utils/consts";
import {NavLink} from "react-router-dom";


const Swiper = () => {


    return (
        <div>
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="image" style={{backgroundImage: `url(images/demo/background-3.jpg)`}}></div>
                        <div className="container">
                            <div className="row align-items-end vh-100">
                                <div className="col-lg-8 text-black" data-swiper-parallax-x="-100%">
                                    <span className="eyebrow">Специальное предложение</span>
                                    <h1 className="mb-3 text-uppercase">для загородных домов</h1>
                                    <NavLink to={CATEGORY_SOSNA_ROUTE} className="btn btn-outline-dark">Просмотреть</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="swiper-slide">
                        <div className="image image--overlay"
                             style={{backgroundImage: `url(images/demo/background-1.jpg)`}}></div>
                        <div className="container">
                            <div className="row align-items-end vh-100">
                                <div className="col-lg-8 text-white" data-swiper-parallax-x="-100%">
                                    <span className="eyebrow">Специальное предложение</span>
                                    <h1>для застройщиков</h1>
                                    <a href="listing-full.html" className="btn btn-outline-white">Посмотреть</a>
                                </div>
                            </div>
                        </div>
                    </div>

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