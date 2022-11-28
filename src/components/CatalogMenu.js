import React, {useEffect, useState} from 'react';
import {NavLink, useLocation} from "react-router-dom";
import {
    CATALOG_ROUTE,
    CATEGORY_CLASSIC_ROUTE,
    CATEGORY_EKOSHPON_LIGHT_ROUTE,
    CATEGORY_EKOSHPON_ROUTE,
    CATEGORY_EMAL_ROUTE,
    CATEGORY_EMALIT_ROUTE,
    CATEGORY_FURNITURE_DOORHANDLE_ROUTE,
    CATEGORY_FURNITURE_LATCH_ROUTE,
    CATEGORY_WHITE_ROUTE
} from "../utils/consts";
import {useParams} from "react-router";

const CatalogMenu = () => {
    const location = useLocation();
    const [collapse1, setCollapse1] = useState(true);
    const [collapse2, setCollapse2] = useState(false);
    useEffect(() => {
        if (location.pathname === CATEGORY_FURNITURE_DOORHANDLE_ROUTE
            || location.pathname === CATEGORY_FURNITURE_LATCH_ROUTE) {
            setCollapse2(true);
        }
    }, [])
    return (
        <div className="widget">
            <span className="widget-title">Каталог</span>
            <ul id="page-nav" className="nav flex-column nav-accordion">
                <li className="nav-item active">
                    <a onClick={() => {
                        setCollapse1(!collapse1)
                    }} className="nav-link" data-toggle="collapse" role="button"
                       aria-expanded={collapse1 ? 'true' : 'false'}
                       aria-controls="menu-2">Межкомнатные двери</a>
                    <div className={collapse1 ? 'collapse show' : 'collapse'} id="menu-1" data-parent="#page-nav">
                        <div>
                            <ul className="nav flex-column">
                                <li className={({isActive}) => (isActive ? 'nav-item active' : 'nav-item')}>
                                    <NavLink className="nav-link" to={CATEGORY_EKOSHPON_LIGHT_ROUTE}>Экошпон лайт</NavLink>
                                </li>
                                <li className={({isActive}) => (isActive ? 'nav-item active' : 'nav-item')}>
                                    <NavLink className="nav-link" to={CATEGORY_EKOSHPON_ROUTE}>Экошпон</NavLink>
                                </li>
                                <li className={({isActive}) => (isActive ? 'nav-item active' : 'nav-item')}>
                                    <NavLink className="nav-link" to={CATEGORY_WHITE_ROUTE}>Белые двери</NavLink>
                                </li>
                                <li className={({isActive}) => (isActive ? 'nav-item active' : 'nav-item')}>
                                    <NavLink className="nav-link" to={CATEGORY_CLASSIC_ROUTE}>Классика</NavLink>
                                </li>
                                <li className={({isActive}) => (isActive ? 'nav-item active' : 'nav-item')}>
                                    <NavLink className="nav-link" to={CATEGORY_EMAL_ROUTE}>Эмаль</NavLink>
                                </li>
                                <li className={({isActive}) => (isActive ? 'nav-item active' : 'nav-item')}>
                                    <NavLink className="nav-link" to={CATEGORY_EMALIT_ROUTE}>Эмалит</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className="nav-item active">
                    <a onClick={() => {
                        setCollapse2(!collapse2)
                    }} className="nav-link" data-toggle="collapse" role="button"
                       aria-expanded={collapse2 ? 'true' : 'false'}
                       aria-controls="menu-2">Фурнитура</a>
                    <div className={collapse2 ? 'collapse show' : 'collapse'} id="menu-2" data-parent="#page-nav">
                        <div>
                            <ul className="nav flex-column">
                                <li className={({isActive}) => (isActive ? 'nav-item active' : 'nav-item')}>
                                    <NavLink to={CATEGORY_FURNITURE_DOORHANDLE_ROUTE} className="nav-link">Дверные ручки</NavLink>
                                </li>
                                <li className={({isActive}) => (isActive ? 'nav-item active' : 'nav-item')}>
                                    <NavLink to={CATEGORY_FURNITURE_LATCH_ROUTE} className="nav-link">Замки</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default CatalogMenu;