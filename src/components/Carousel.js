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
                        <div className="card card-product col-lg-10">
                            <figure className="card-image">
                                <NavLink to="/doors/104">
                                    <img className="img-carousel" src="https://dveri-arsenal.ru:444/static/images/doors/product104-1.jpg" alt="Image" />
                                </NavLink>

                            </figure>
                            <NavLink to="/doors/104" className="card-body">
                                <h3 className="card-title">Триумф ДО</h3>
                                <span className="price">9500.00₽</span>
                            </NavLink>

                        </div>
                        <div className="card card-product col-lg-10">
                            <figure className="card-image">
                                <NavLink to="/doors/120">
                                    <img className="img-carousel" src="https://dveri-arsenal.ru:444/static/images/doors/product120-1.jpg" alt="Image" />
                                </NavLink>
                            </figure>
                            <NavLink to="/doors/120" className="card-body">
                                <h3 className="card-title">Каскад (зеркало)</h3>
                                <span className="price">6000.00₽</span>
                            </NavLink>
                        </div>
                        <div className="card card-product col-lg-10">
                            <figure className="card-image">
                                <NavLink to="/doors/121">
                                    <img className="img-carousel" src="https://dveri-arsenal.ru:444/static/images/doors/product121-1.jpg" alt="Image" />
                                </NavLink>
                            </figure>
                            <NavLink to="/doors/121" className="card-body">
                                <h3 className="card-title">Горизонталь ДО</h3>
                                <span className="price">4100.00₽</span>
                            </NavLink>
                        </div>
                    <div className="card card-product col-lg-10">
                        <figure className="card-image">
                            <NavLink to="/doors/112">
                                <img className="img-carousel" src="https://dveri-arsenal.ru:444/static/images/doors/product112-1.jpg" alt="Image" />
                            </NavLink>
                        </figure>
                        <NavLink to="/doors/112" className="card-body">
                            <h3 className="card-title">Нордик 1</h3>
                            <span className="price">11000.00₽</span>
                        </NavLink>
                    </div>
                    <div className="card card-product col-lg-10">
                        <figure className="card-image">
                            <NavLink to="/doors/113">
                                <img className="img-carousel" src="https://dveri-arsenal.ru:444/static/images/doors/product113-1.jpg" alt="Image" />
                            </NavLink>
                        </figure>
                        <NavLink to="/doors/113" className="card-body">
                            <h3 className="card-title">Нордик 2</h3>
                            <span className="price">11000.00₽</span>
                        </NavLink>
                    </div>
                    <div className="card card-product col-lg-10">
                        <figure className="card-image">
                            <NavLink to="/doors/114">
                                <img className="img-carousel" src="https://dveri-arsenal.ru:444/static/images/doors/product114-1.jpg" alt="Image" />
                            </NavLink>
                        </figure>
                        <NavLink to="/doors/114" className="card-body">
                            <h3 className="card-title">Нордик 3</h3>
                            <span className="price">11000.00₽</span>
                        </NavLink>
                    </div>
                </Slider>
                </div>
            {/*</div>*/}
        </section>
    );
};

export default Carousel;