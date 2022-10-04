import * as React from 'react';
import styles from '../css/style.css';
import {NavLink} from "react-router-dom";
import {ABOUT_ROUTE, CATALOG_ROUTE, CONTACTS_ROUTE, INDEX_ROUTE} from "../utils/consts";



const Footer = () => {
    return (
        <footer className="bg-dark pb-0 text-white">
            <div className="container">
                <div className="row justify-content-md-between gutter-2">

                    {/*menu*/}
                    <div className="order-1 col-md-8 col-lg-2">
                        <div className="row">
                            <div className="col">
                                <h4 className="eyebrow mb-1">Меню</h4>
                                <ul className="menu-list">
                                    <li className="menu-list-item"><NavLink to={INDEX_ROUTE}
                                                                      className="menu-list-link">Главная</NavLink></li>
                                    <li className="menu-list-item"><NavLink to={CATALOG_ROUTE}
                                                                      className="menu-list-link">Каталог</NavLink></li>
                                    <li className="menu-list-item"><NavLink to={ABOUT_ROUTE} className="menu-list-link">О
                                        нас</NavLink></li>
                                    <li className="menu-list-item"><NavLink to={CONTACTS_ROUTE}
                                                                      className="menu-list-link">Контакты</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/*subscribe*/}
                    <div className="order-2 order-md-3 order-lg-2 col-md-8 col-lg-4">
                        <h4 className="eyebrow mb-1">Подписаться на новости</h4>
                        <div className="input-combined mb-2">
                            <input type="text" className="form-control" placeholder="Ваш email" aria-label="Ваш email"
                                   aria-describedby="button-addon2" />
                                <button className="btn btn-white" type="button" id="button-addon2">Подписаться</button>
                                <span className="input-combined_indicator"></span>
                        </div>
                        <ul className="list list--horizontal">
                            <li><a href="#!" className="text-hover-instagram"><i
                                className="fs-28 icon-instagram-square-brands"></i></a>
                            </li>
                        </ul>
                    </div>

                    {/*settings*/}
                    <div className="order-3 order-md-2 order-lg-3 col-md-4 col-lg-3">

                        <div className="select-frame">
                            <h6 className="fs-14 text-white m-0"><i
                                className="icon-map mr-1 text-opaque"></i>
                                Санкт-Петербург,
                                Петергофское шоссе, 73</h6>
                            <h6 className="fs-14 text-white m-0"><i
                                className="icon-phone mr-1 text-opaque"></i>
                                +7 (812) 985-94-58</h6>
                            <h6 className="fs-14 text-white m-0"><i
                                className="mr-3 text-opaque"></i>
                                +7 (812) 332-45-40 </h6>
                            <h6 className="fs-14 text-white m-0"><i
                                className="mr-3 text-opaque"></i>
                                +7 (905) 223-39-39</h6>
                        </div>
                        <ul className="list list--horizontal mt-2">
                            <li><img src="images/demo/visa-1.svg" className="payment" alt="Image" /></li>
                            <li><img src="images/demo/master-card-1.svg" className="payment" alt="Image" /></li>
                            <li><img src="images/demo/mir.svg" className="payment" alt="Image" /></li>
                        </ul>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;