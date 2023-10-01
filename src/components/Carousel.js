import React from 'react';
import styles from '../css/style.css';
import Slider from "react-slick";
import {NavLink} from "react-router-dom";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <section className="py-lg-0 no-overflow">
            <div className="container">
                {/*<div className="row align-items-center gutter-1">*/}
                    <div className="col-lg-6 mt-2 mb-1">
                        <div className="pr-lg-3">
                            <div className="level-1">
                                {/*<span class="eyebrow text-muted">Hot Products</span>*/}
                                <h4>Лучшее предложение</h4>
                            </div>
                        </div>
                    </div>
                <Slider {...settings}>
                        <div className="card card-product col-lg-10 ml-3">
                            <figure className="card-image">
                                <NavLink to="/doors/73">
                                    <img className="img-carousel" src="https://dveri-arsenal.ru:444/static/images/doors/product73-1.jpg" alt="Image" />
                                        <img className="img-carousel" src="https://dveri-arsenal.ru:444/static/images/doors/product73-2.jpg" alt="Image" />
                                </NavLink>

                            </figure>
                            <NavLink to="/doors/1" className="card-body">
                                <h3 className="card-title">Урбан Лайт</h3>
                                <span className="price">3100.00₽</span>
                            </NavLink>

                        </div>
                        <div className="card card-product col-lg-10 ml-3">
                            <figure className="card-image">
                                <NavLink to="/doors/74">
                                    <img className="img-carousel" src="	https://dveri-arsenal.ru:444/static/images/doors/product74-1.jpg" alt="Image" />
                                    <img className="img-carousel" src="	https://dveri-arsenal.ru:444/static/images/doors/product74-2.jpg" alt="Image" />
                                </NavLink>
                            </figure>
                            <NavLink to="/doors/22" className="card-body">
                                <h3 className="card-title">Гранд Лайт</h3>
                                <span className="price">3500.00₽</span>
                            </NavLink>
                        </div>
                        <div className="card card-product col-lg-10 ml-3">
                            <figure className="card-image">
                                <NavLink to="/doors/75">
                                    <img className="img-carousel" src="	https://dveri-arsenal.ru:444/static/images/doors/product75-1.jpg" alt="Image" />
                                    <img className="img-carousel" src="	https://dveri-arsenal.ru:444/static/images/doors/product75-2.jpg" alt="Image" />
                                </NavLink>
                            </figure>
                            <NavLink to="/doors/13" className="card-body">
                                <h3 className="card-title">Меркурий лайт</h3>
                                <span className="price">3300.00₽</span>
                            </NavLink>
                        </div>
                    <div className="card card-product col-lg-10 ml-3">
                        <figure className="card-image">
                            <NavLink to="/doors/60">
                                <img className="img-carousel" src="https://dveri-arsenal.ru:444/static/images/doors/product60-1.jpg" alt="Image" />
                            </NavLink>
                        </figure>
                        <NavLink to="/doors/16" className="card-body">
                            <h3 className="card-title">Скандинавия</h3>
                            <span className="price">3500.00₽</span>
                        </NavLink>
                    </div>
                    <div className="card card-product col-lg-10 ml-3">
                        <figure className="card-image">
                            <NavLink to="/doors/46">
                                <img className="img-carousel" src="https://dveri-arsenal.ru:444/static/images/doors/product46-1.jpg" alt="Image" />
                                <img className="img-carousel" src="https://dveri-arsenal.ru:444/static/images/doors/product46-2.jpg" alt="Image" />
                            </NavLink>
                        </figure>
                        <NavLink to="/doors/16" className="card-body">
                            <h3 className="card-title">Прима 3 ДГ</h3>
                            <span className="price">5500.00₽</span>
                        </NavLink>
                    </div>
                </Slider>
                </div>
            {/*</div>*/}
        </section>
    );
};

export default Carousel;