import * as React from 'react';
import styles from '../css/style.css';
import {NavLink} from "react-router-dom";
import {ABOUT_ROUTE, CATALOG_ROUTE, CONTACTS_ROUTE, INDEX_ROUTE} from "../utils/consts";


const NavBar = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a href="index.html" className="navbar-brand order-1 order-lg-2"><img src="images/logo.png"
                                                                                          alt="Logo"/></a>

                    <div className="collapse navbar-collapse order-4 order-lg-1" id="navbarMenu">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink to={INDEX_ROUTE} className="nav-link" activeClassName='curr'
                                         className={({ isActive }) => (isActive ? 'nav-link text-red' : 'nav-link')}
                                >
                                    Главная
                                </NavLink>
                            </li>
                            <li className="nav-item dropdown dropdown-lg dropdown-hover">
                                <NavLink to={CATALOG_ROUTE} id="navbarDropdown-2"
                                         role="button"
                                         data-toggle="dropdown"
                                         aria-haspopup="true" aria-expanded="false" activeClassName='curr'
                                         className={({ isActive }) => (isActive ? 'nav-link dropdown-toggle text-red' : 'nav-link dropdown-toggle')}>
                                    Каталог
                                </NavLink>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown-2">
                                    <div className="container">
                                        <div className="row gutter-2">
                                            <div className="col-lg-2">
                                                <span className="eyebrow text-muted mb-1">Межкомнатные двери</span>
                                                <ul className="menu-list">
                                                    <li className="menu-list-item"><a href="listing.html"
                                                                                      className="menu-list-link">Экошпон Лайт</a>
                                                    </li>
                                                    <li className="menu-list-item"><a href="listing.html"
                                                                                      className="menu-list-link">Экошпон</a>
                                                    </li>
                                                    <li className="menu-list-item"><a href="listing.html"
                                                                                      className="menu-list-link">Белые</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-2">
                                                <span className="eyebrow text-muted mb-1">Фурнитура</span>
                                                <ul className="menu-list">
                                                    <li className="menu-list-item"><a href="listing.html"
                                                                                      className="menu-list-link">Дверные ручки</a>
                                                    </li>
                                                    <li className="menu-list-item"><a href="listing.html"
                                                                                      className="menu-list-link">Дверные петли</a>
                                                    </li>
                                                    <li className="menu-list-item"><a href="listing.html"
                                                                                      className="menu-list-link">Ригеля и ограничители</a>
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink to={ABOUT_ROUTE} activeClassName='curr' className={({ isActive }) => (isActive ? 'nav-link text-red' : 'nav-link')}>
                                    О нас
                                </NavLink>
                            </li>
                            <li className="nav-item dropdown-lg">
                                <NavLink to={CONTACTS_ROUTE} href="contact.html" className={({ isActive }) => (isActive ? 'nav-link text-red' : 'nav-link')}>
                                    Контакты
                                </NavLink>

                            </li>
                        </ul>
                    </div>

                    <div className="collapse navbar-collapse order-5 order-lg-3" id="navbarMenu2">
                        <ul className="navbar-nav ml-auto position-relative">

                            {/*search*/}
                            <li className="nav-item dropdown dropdown-md dropdown-hover">
                                <a className="nav-icon dropdown-toggle" id="navbarDropdown-4" role="button"
                                   data-toggle="dropdown"
                                   aria-haspopup="true" aria-expanded="false">
                                    <i className="icon-search d-none d-lg-inline-block"></i>
                                    <span className="d-inline-block d-lg-none">Поиск</span>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown-4">
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="searchForm"
                                               placeholder="Поиск"/>
                                    </div>
                                </div>
                            </li>

                            {/*user area*/}
                            {/*<li className="nav-item dropdown dropdown-md dropdown-hover">*/}
                            {/*    <a className="nav-icon dropdown-toggle" id="navbarDropdown-6" role="button"*/}
                            {/*       data-toggle="dropdown"*/}
                            {/*       aria-haspopup="true" aria-expanded="false">*/}
                            {/*        <i className="icon-user d-none d-lg-inline-block"></i>*/}
                            {/*        <span className="d-inline-block d-lg-none">Account</span>*/}
                            {/*    </a>*/}
                            {/*    <div className="dropdown-menu" aria-labelledby="navbarDropdown-6">*/}
                            {/*        <div className="row gutter-2">*/}
                            {/*            <div className="col-12">*/}
                            {/*                <fieldset>*/}
                            {/*                    <div className="row">*/}
                            {/*                        <div className="col-12">*/}
                            {/*                            <div className="form-label-group">*/}
                            {/*                                <input type="text" id="inputName"*/}
                            {/*                                       className="form-control form-control-lg"*/}
                            {/*                                       placeholder="Name"*/}
                            {/*                                       required="" value="Dumitru" />*/}
                            {/*                                    <label htmlFor="inputName">Логин</label>*/}
                            {/*                            </div>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                    <div className="row">*/}
                            {/*                        <div className="col-12">*/}
                            {/*                            <div className="form-label-group">*/}
                            {/*                                <input type="text" id="inputSurname"*/}
                            {/*                                       className="form-control form-control-lg"*/}
                            {/*                                       placeholder="Surname"*/}
                            {/*                                       required="" />*/}
                            {/*                                    <label htmlFor="inputSurname">Пароль</label>*/}
                            {/*                            </div>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                </fieldset>*/}
                            {/*            </div>*/}
                            {/*            <div className="col-12 text-center">*/}
                            {/*                <a href="" className="underline fs-14">Забыли пароль ?</a>*/}
                            {/*            </div>*/}
                            {/*            <div className="col-12">*/}
                            {/*                <a href="" className="btn btn-primary btn-block">Войти</a>*/}
                            {/*                <a href=""*/}
                            {/*                   className="btn btn-outline-secondary btn-block">Зарегистрироваться</a>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</li>*/}

                            {/*favourites*/}
                            <li className="d-none d-lg-inline nav-item dropdown dropdown-md dropdown-hover">
                                <a className="nav-icon" id="navbarDropdown-7" role="button" data-toggle="dropdown"
                                   aria-haspopup="true" aria-expanded="false"><i className="icon-heart"></i></a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown-7">
                                    <div className="row gutter-3">
                                        <div className="col-12">
                                            <h3 className="eyebrow text-dark fs-16 mb-1">Избранные товары</h3>
                                            {/*<p class="text-muted fs-14"><a href="" class="underline">Sign in</a> to keep your*/}
                                            {/*   saves for up to 60 days.</p>*/}
                                        </div>
                                        <div className="col-12">
                                            <div className="cart-item">
                                                <a href="#!" className="cart-item-image"><img
                                                    src="images/demo/product-1.jpg"
                                                    alt="Image"/></a>
                                                <div className="cart-item-body">
                                                    <div className="row">
                                                        <div className="col-9">
                                                            <h5 className="cart-item-title">Межкомнатная дверь
                                                                DUPLEX</h5>
                                                            <small>Новая цена</small>
                                                            <ul className="list list--horizontal fs-14">
                                                                <li><s>6200.00₽</s></li>
                                                                <li className="text-red">5000.00₽</li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-3 text-right">
                                                            <ul className="cart-item-options">
                                                                <li><a href="" className="icon-x"></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <a href="" className="btn btn-primary btn-block">Добавить всё в корзину</a>
                                            <a href="" className="btn btn-outline-secondary btn-block">Просмотреть
                                                избранные
                                                товары</a>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            {/*cart*/}
                            {/*<li className="nav-item dropdown dropdown-md dropdown-hover">*/}
                            {/*    <a className="nav-icon dropdown-toggle" id="navbarDropdown-8" role="button"*/}
                            {/*       data-toggle="dropdown"*/}
                            {/*       aria-haspopup="true" aria-expanded="false">*/}
                            {/*        <i className="icon-shopping-bag d-none d-lg-inline-block"></i>*/}
                            {/*        <span className="d-inline-block d-lg-none">Bag</span>*/}
                            {/*    </a>*/}
                            {/*    <div className="dropdown-menu" aria-labelledby="navbarDropdown-8">*/}
                            {/*        <div className="row gutter-3">*/}
                            {/*            <div className="col-12">*/}
                            {/*                <h3 className="eyebrow text-dark fs-16 mb-0">Моя корзина</h3>*/}
                            {/*            </div>*/}
                            {/*            <div className="col-12">*/}
                            {/*                <div className="cart-item">*/}
                            {/*                    <a href="#!" className="cart-item-image"><img*/}
                            {/*                        src="images/demo/product-1.jpg"*/}
                            {/*                        alt="Image" /></a>*/}
                            {/*                    <div className="cart-item-body">*/}
                            {/*                        <div className="row">*/}
                            {/*                            <div className="col-9">*/}
                            {/*                                <h5 className="cart-item-title">Межкомнатная дверь DUPLEX</h5>*/}
                            {/*                                <small>Новая цена</small>*/}
                            {/*                                <ul className="list list--horizontal fs-14">*/}
                            {/*                                    <li><s>6200.00₽</s></li>*/}
                            {/*                                    <li className="text-red">5000.00₽</li>*/}
                            {/*                                </ul>*/}
                            {/*                            </div>*/}
                            {/*                            <div className="col-3 text-right">*/}
                            {/*                                <ul className="cart-item-options">*/}
                            {/*                                    <li><a href="" className="icon-x"></a></li>*/}
                            {/*                                </ul>*/}
                            {/*                            </div>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*            <div className="col-12">*/}
                            {/*                <ul className="list-group list-group-minimal">*/}
                            {/*                    <li className="list-group-item d-flex justify-content-between align-items-center text-uppercase font-weight-bold">*/}
                            {/*                        Итого*/}
                            {/*                        <span>5000.00₽</span>*/}
                            {/*                    </li>*/}
                            {/*                </ul>*/}
                            {/*            </div>*/}
                            {/*            <div className="col-12">*/}
                            {/*                <a href="" className="btn btn-primary btn-block">Перейти к оплате</a>*/}
                            {/*                <a href="" className="btn btn-outline-secondary btn-block">Посмотреть всё</a>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</li>*/}
                        </ul>
                    </div>

                    <div className="order-2 d-flex d-lg-none" id="navbarMenuMobile">
                        <ul className="navbar-nav navbar-nav--icons ml-auto position-relative">

                            {/*search*/}
                            <li className="nav-item">
                                <a href="" className="nav-icon"><i className="icon-search"></i></a>
                            </li>

                            {/*cart*/}
                            <li className="nav-item dropdown dropdown-md dropdown-hover">
                                <a href="" className="nav-icon"><i className="icon-shopping-bag"></i></a>
                            </li>

                            {/*menu*/}
                            <li className="nav-item dropdown dropdown-md dropdown-hover">
                                <a href="" className="nav-icon" data-toggle="collapse" data-target=".navbar-collapse"
                                   aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                                    <i className="icon-menu"></i>
                                </a>
                            </li>

                        </ul>
                    </div>

                </nav>
            </div>
        </header>
    );
};
export default NavBar;