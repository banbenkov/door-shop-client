import React from 'react';
import styles from '../css/style.css';
import Slider from "react-slick";

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
                                <a href="#!" className="action"><i className="icon-heart"></i></a>
                                <a href="#!">
                                    <img src="images/doors/product1-4.jpg" alt="Image" />
                                        <img src="images/doors/product2-4.jpg" alt="Image" />
                                </a>

                            </figure>
                            <a href="" className="card-body">
                                <h3 className="card-title">Орион ДГ/ДО Капучино</h3>
                                <span className="price">4500.00₽</span>
                            </a>

                        </div>
                        <div className="card card-product col-lg-10">
                            <figure className="card-image">
                                <a href="#!" className="action"><i className="icon-heart"></i></a>
                                <a href="#!">
                                    <img src="images/doors/product21-1-main.jpg" alt="Image" />
                                </a>
                            </figure>
                            <a href="" className="card-body">
                                <h3 className="card-title">Урбан Беленый Дуб</h3>
                                <span className="price">4500.00₽</span>
                            </a>
                        </div>
                        <div className="card card-product col-lg-10">
                            <figure className="card-image">
                                <a href="#!" className="action"><i className="icon-heart"></i></a>
                                <a href="#!">
                                    <img src="images/doors/product12-1.jpg" alt="Image" />

                                </a>
                            </figure>
                            <a href="" className="card-body">
                                <h3 className="card-title">Палитра Белая ДГ</h3>
                                <span className="price">4400.00₽</span>
                            </a>
                        </div>
                </Slider>
                </div>
            {/*</div>*/}
        </section>
    );
};

export default Carousel;