import React from 'react';
import styles from '../css/style.css';
import vendor from '../css/vendor.css';
import {NavLink} from "react-router-dom";
import {CATEGORY_CLASSIC_ROUTE, CATEGORY_EMALIT_ROUTE} from "../utils/consts";

const Categories = () => {
    return (
        <section className="mb-2">
            <div className="container">
                <div className="row align-items-end mb-1">
                    <div className="col-8 col-md-6">
                        <span className="eyebrow text-muted">Каталог</span>
                        <h2>Популярные категории</h2>
                    </div>
                    <div className="col-4 col-md-6 text-right">
                        <NavLink to='/doors' className="underlined">Посмотреть всё</NavLink>
                    </div>
                </div>
                <div className="row gutter-1">
                    <div className="col-6 col-lg-3">
                        <NavLink to='/ekoshpon-light'>
                            <figure className="category category--alt">
                                <div className="equal">
                                    <span className="image">
                                        <img
                                            src="https://dveri-arsenal.ru:444/static/images/doors/product89-4.jpg"
                                            alt="Экошпон лайт"
                                            width="300"
                                            height="300"
                                            decoding="async"
                                            style={{objectFit: 'cover', width: '100%', height: '100%'}}
                                        />
                                    </span>
                                </div>
                                <figcaption>Экошпон лайт</figcaption>
                            </figure>
                        </NavLink>
                    </div>
                    <div className="col-6 col-lg-3">
                        <NavLink to='/ekoshpon'>
                            <figure className="category category--alt">
                                <div className="equal">
                                    <span className="image">
                                        <img
                                            src="https://dveri-arsenal.ru:444/static/images/doors/product104-1.jpg"
                                            alt="Экошпон"
                                            width="300"
                                            height="300"
                                            decoding="async"
                                            style={{objectFit: 'cover', width: '100%', height: '100%'}}
                                        />
                                    </span>
                                </div>
                                <figcaption>Экошпон</figcaption>
                            </figure>
                        </NavLink>
                    </div>
                    <div className="col-6 col-lg-3">
                        <NavLink to='/white'>
                            <figure className="category category--alt">
                                <div className="equal">
                                    <span className="image">
                                        <img
                                            src="https://dveri-arsenal.ru:444/static/images/doors/product60-1.jpg"
                                            alt="Белые двери"
                                            width="300"
                                            height="300"
                                            decoding="async"
                                            style={{objectFit: 'cover', width: '100%', height: '100%'}}
                                        />
                                    </span>
                                </div>
                                <figcaption>Белые двери</figcaption>
                            </figure>
                        </NavLink>
                    </div>
                    <div className="col-6 col-lg-3">
                        <NavLink to={CATEGORY_EMALIT_ROUTE}>
                            <figure className="category category--alt">
                                <div className="equal">
                                    <span className="image">
                                        <img
                                            src="https://dveri-arsenal.ru:444/static/images/doors/product106-1.jpg"
                                            alt="Эмалит"
                                            width="300"
                                            height="300"
                                            decoding="async"
                                            style={{objectFit: 'cover', width: '100%', height: '100%'}}
                                        />
                                    </span>
                                </div>
                                <figcaption>Эмалит</figcaption>
                            </figure>
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Categories;