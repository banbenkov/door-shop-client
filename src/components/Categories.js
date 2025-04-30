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
                                <div className="equal"><span className="image"
                                                             style={{backgroundImage: `url(https://dveri-arsenal.ru:444/static/images/doors/product8-3.jpg)`}}></span>
                                </div>
                                <figcaption>Экошпон лайт</figcaption>
                            </figure>
                        </NavLink>
                    </div>
                    <div className="col-6 col-lg-3">
                        <NavLink to='/ekoshpon'>
                            <figure className="category category--alt">
                                <div className="equal"><span className="image"
                                                             style={{backgroundImage: `url(https://dveri-arsenal.ru:444/static/images/doors/product22-4.jpg)`}}></span>
                                </div>
                                <figcaption>Экошпон</figcaption>
                            </figure>
                        </NavLink>
                    </div>
                    <div className="col-6 col-lg-3">
                        <NavLink to='/white'>
                            <figure className="category category--alt">
                                <div className="equal"><span className="image"
                                                             style={{backgroundImage: `url(https://dveri-arsenal.ru:444/static/images/doors/product24-1.jpg)`}}></span>
                                </div>
                                <figcaption>Белые двери</figcaption>
                            </figure>
                        </NavLink>
                    </div>
                    <div className="col-6 col-lg-3">
                        <NavLink to={CATEGORY_EMALIT_ROUTE}>
                            <figure className="category category--alt">
                                <div className="equal"><span className="image"
                                                             style={{backgroundImage: `url(https://dveri-arsenal.ru:444/static/images/doors/product106-1.jpg)`}}></span>
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