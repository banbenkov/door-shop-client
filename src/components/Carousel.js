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
                                <a href="#!" className="action"><i className="icon-heart"></i></a>
                                <NavLink to="/doors/1">
                                    <img className="img-carousel" src="images/doors/product1-4.jpg" alt="Image" />
                                        <img className="img-carousel" src="images/doors/product2-4.jpg" alt="Image" />
                                </NavLink>

                            </figure>
                            <NavLink to="/doors/1" className="card-body">
                                <h3 className="card-title">Орион ДГ/ДО Капучино</h3>
                                <span className="price">2500.00₽</span>
                            </NavLink>

                        </div>
                        <div className="card card-product col-lg-10 ml-3">
                            <figure className="card-image">
                                <a href="#!" className="action"><i className="icon-heart"></i></a>
                                <NavLink to="/doors/22">
                                    <img className="img-carousel" src="images/doors/product21-1-main.jpg" alt="Image" />
                                </NavLink>
                            </figure>
                            <NavLink to="/doors/22" className="card-body">
                                <h3 className="card-title">Урбан Беленый Дуб</h3>
                                <span className="price">4500.00₽</span>
                            </NavLink>
                        </div>
                        <div className="card card-product col-lg-10 ml-3">
                            <figure className="card-image">
                                <a href="#!" className="action"><i className="icon-heart"></i></a>
                                <NavLink to="/doors/13">
                                    <img className="img-carousel" src="images/doors/product12-1.jpg" alt="Image" />

                                </NavLink>
                            </figure>
                            <NavLink to="/doors/13" className="card-body">
                                <h3 className="card-title">Палитра Белая ДГ</h3>
                                <span className="price">2600.00₽</span>
                            </NavLink>
                        </div>
                    <div className="card card-product col-lg-10 ml-3">
                        <figure className="card-image">
                            <a href="#!" className="action"><i className="icon-heart"></i></a>
                            <NavLink to="/doors/16">
                                <img className="img-carousel" src="images/doors/product15-1.jpg" alt="Image" />

                            </NavLink>
                        </figure>
                        <NavLink to="/doors/16" className="card-body">
                            <h3 className="card-title">Меркурий граф белый</h3>
                            <span className="price">5900.00₽</span>
                        </NavLink>
                    </div>
                </Slider>
                </div>
            {/*</div>*/}
        </section>
    );
};

export default Carousel;