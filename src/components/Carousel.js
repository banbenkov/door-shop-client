import React from 'react';
import styles from '../css/style.css';
import InfiniteCarousel from 'react-leaf-carousel';

const Carousel = () => {
    return (
        <section className="py-lg-0 no-overflow">
            <div className="container">
                {/*<div className="row align-items-center gutter-1">*/}
                    <div className="col-lg-6 mt-2">
                        <div className="pr-lg-3">
                            <div className="level-1">
                                {/*<span class="eyebrow text-muted">Hot Products</span>*/}
                                <h4>Лучшее предложение</h4>
                            </div>
                        </div>
                    </div>
                    <InfiniteCarousel
                        breakpoints={[
                            {
                                breakpoint: 500,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2,
                                },
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 3,
                                },
                            },
                        ]}
                        dots={true}
                        showSides={true}
                        sidesOpacity={0}
                        sideSize={0.1}
                        slidesToScroll={3}
                        slidesToShow={3}
                        scrollOnDevice={true}
                    >

                        <div className="card card-product">
                            <figure className="card-image">
                                <a href="#!" className="action"><i className="icon-heart"></i></a>
                                <a href="#!">
                                    <img src="images/demo/product-1.jpg" alt="Image" />
                                        <img src="images/demo/product-1-3.jpg" alt="Image" />
                                </a>
                            </figure>
                            <a href="" className="card-body">
                                <h3 className="card-title">Межкомнатная дверь DUPLEX</h3>
                                <span className="price">5000.00₽</span>
                            </a>
                        </div>
                        <div className="card card-product">
                            <figure className="card-image">
                                <a href="#!" className="action"><i className="icon-heart"></i></a>
                                <a href="#!">
                                    <img src="images/demo/product-2.jpg" alt="Image" />
                                        <img src="images/demo/product-2-2.jpg" alt="Image" />
                                </a>
                            </figure>
                            <a href="" className="card-body">
                                <h3 className="card-title">Межкомнатная дверь DUPLEX дуб</h3>
                                <span className="price">6000.00₽</span>
                            </a>
                        </div>
                        <div className="card card-product">
                            <figure className="card-image">
                                <a href="#!" className="action"><i className="icon-heart"></i></a>
                                <a href="#!">
                                    <img src="images/demo/product-3.jpg" alt="Image" />

                                </a>
                            </figure>
                            <a href="" className="card-body">
                                <h3 className="card-title">Межкомнатная дверь DUPLEX экошпон</h3>
                                <span className="price">6500.00₽</span>
                            </a>
                        </div>
                        <div className="card card-product">
                            <figure className="card-image">
                                <a href="#!" className="action"><i className="icon-heart"></i></a>
                                <a href="#!">
                                    <img src="images/demo/product-4.jpg" alt="Image" />

                                </a>
                            </figure>
                            <a href="" className="card-body">
                                <h3 className="card-title">Межкомнатная дверь альфа ПГ</h3>
                                <span className="price">5400.00₽</span>
                            </a>
                        </div>
                    </InfiniteCarousel>
                </div>
            {/*</div>*/}
        </section>
    );
};

export default Carousel;