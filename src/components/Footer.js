import * as React from 'react';
import styles from '../css/style.css';
import {NavLink} from "react-router-dom";
import {
    ABOUT_ROUTE,
    CATALOG_ROUTE,
    CATEGORY_3D_ROUTE,
    CATEGORY_CLASSIC_ROUTE,
    CATEGORY_DUB_ROUTE,
    CATEGORY_EKOSHPON_LIGHT_ROUTE,
    CATEGORY_EKOSHPON_ROUTE,
    CATEGORY_EMAL_ROUTE,
    CATEGORY_EMALIT_ROUTE,
    CATEGORY_FURNITURE_DOORHANDLE_ROUTE, CATEGORY_FURNITURE_LATCH_ROUTE,
    CATEGORY_SOSNA_ROUTE,
    CATEGORY_WHITE_ROUTE,
    CONTACTS_ROUTE,
    INDEX_ROUTE,
    PORTFOLIO_ROUTE, PRIVACY_POLICY
} from "../utils/consts";
import masterCard from "../img/master-card-1.svg";
import mir from "../img/mir.svg";
import visa from "../img/visa-1.svg";




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
                                    <li className="menu-list-item"><NavLink to={PORTFOLIO_ROUTE}
                                                                            className="menu-list-link">Портфолио</NavLink></li>
                                    <li className="menu-list-item"><NavLink to={ABOUT_ROUTE} className="menu-list-link">
                                        О нас</NavLink></li>
                                    <li className="menu-list-item"><NavLink to={CONTACTS_ROUTE}
                                                                      className="menu-list-link">Контакты</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/*subscribe*/}
                    {/*<div className="order-2 order-md-3 order-lg-2 col-md-8 col-lg-4">*/}
                    {/*    <h4 className="eyebrow mb-1">Подписаться на новости</h4>*/}
                    {/*    <div className="input-combined mb-2">*/}
                    {/*        <input type="text" className="form-control" placeholder="Ваш email" aria-label="Ваш email"*/}
                    {/*               aria-describedby="button-addon2" />*/}
                    {/*            <button className="btn btn-white" type="button" id="button-addon2">Подписаться</button>*/}
                    {/*            <span className="input-combined_indicator"></span>*/}
                    {/*    </div>*/}
                    {/*    <ul className="list list--horizontal">*/}
                    {/*        <li><a href="#!" className="text-hover-instagram">*/}
                    {/*            <i className="bi bi-telegram"></i>*/}
                    {/*        </a>*/}
                    {/*        </li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}

                    {/*Двери*/}
                    <div className="order-1 col-md-8 col-lg-2">
                        <div className="row">
                            <div className="col">
                                <h4 className="eyebrow mb-1">МЕЖКОМНАТНЫЕ ДВЕРИ</h4>
                                <ul className="menu-list">
                                    <li className="menu-list-item"><NavLink to={CATEGORY_3D_ROUTE}
                                                                            className="menu-list-link">3D покрытие</NavLink></li>
                                    <li className="menu-list-item"><NavLink to={CATEGORY_EKOSHPON_ROUTE}
                                                                            className="menu-list-link">Экошпон</NavLink></li>
                                    <li className="menu-list-item"><NavLink to={CATEGORY_EKOSHPON_LIGHT_ROUTE}
                                                                            className="menu-list-link">Экошпон лайт</NavLink></li>
                                    <li className="menu-list-item"><NavLink to={CATEGORY_WHITE_ROUTE}
                                                                            className="menu-list-link">Белые двери</NavLink></li>
                                    {/*<li className="menu-list-item"><NavLink to={CATEGORY_CLASSIC_ROUTE}*/}
                                    {/*                                        className="menu-list-link">Классика</NavLink></li>*/}
                                    <li className="menu-list-item"><NavLink to={CATEGORY_EMAL_ROUTE}
                                                                            className="menu-list-link">Эмаль</NavLink></li>
                                    <li className="menu-list-item"><NavLink to={CATEGORY_EMALIT_ROUTE}
                                                                            className="menu-list-link">Эмалит</NavLink></li>
                                    <li className="menu-list-item"><NavLink to={CATEGORY_SOSNA_ROUTE}
                                                                            className="menu-list-link">Массив сосны</NavLink></li>
                                    <li className="menu-list-item"><NavLink to={CATEGORY_DUB_ROUTE}
                                                                            className="menu-list-link">Массив дуба</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/*Фурнитура*/}
                    <div className="order-1 col-md-8 col-lg-2">
                        <div className="row">
                            <div className="col">
                                <h4 className="eyebrow mb-1">Фурнитура</h4>
                                <ul className="menu-list">
                                    <li className="menu-list-item"><NavLink to={CATEGORY_FURNITURE_DOORHANDLE_ROUTE}
                                                                            className="menu-list-link">Дверные ручки</NavLink></li>
                                    <li className="menu-list-item"><NavLink to={CATEGORY_FURNITURE_LATCH_ROUTE}
                                                                            className="menu-list-link">Замки</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/*settings*/}
                    <div className="order-3 order-md-2 order-lg-3 col-md-4 col-lg-3">

                        <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress" className="select-frame">
                            <h6 className="fs-14 text-white m-0"><i
                                className="bi bi-map mr-1 text-opaque"></i>
                                <span itemprop="addressLocality">Санкт-Петербург</span>,
                                <span itemprop="streetAddress">Петергофское шоссе, 73</span></h6>
                            <h6 className="fs-14 text-white m-0"><i
                                className="bi bi-clock mr-1 text-opaque"></i>
                                <span>Пн-Пт с 08:00 до 18:00, Сб-Вс выходной</span>
                            </h6>
                            <h6 className="fs-14 text-white m-0"><i
                                className="bi bi-telephone mr-1 text-opaque"></i>
                                <span itemProp="telephone">+7 (812) 985-94-58</span></h6>
                            <h6 className="fs-14 text-white m-0"><i
                                className="mr-3 text-opaque"></i>
                                <span itemProp="telephone">+7 (812) 332-45-40</span></h6>
                            <h6 className="fs-14 text-white m-0"><i
                                className="mr-3 text-opaque"></i>
                                <span itemProp="telephone">+7 (905) 223-39-39</span></h6>
                            <h6 className="fs-14 text-white m-0"><i
                                className="bi bi-mailbox mr-1 text-opaque"></i>
                                <span>arsenalstroy_08@mail.ru</span>
                            </h6>
                            <h6 className="fs-14 text-white m-0"><i
                                className="bi bi-card-list mr-1 text-opaque"></i>
                                <span><NavLink to={PRIVACY_POLICY}><u>Политика конфиденциальности</u></NavLink></span>
                            </h6>
                        </div>
                        <ul className="list list--horizontal mt-2">
                            <li><img src={visa} className="payment" alt="Image" /></li>
                            <li><img src={masterCard} className="payment" alt="Image" /></li>
                            <li><img src={mir} className="payment" alt="Image" /></li>
                        </ul>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;