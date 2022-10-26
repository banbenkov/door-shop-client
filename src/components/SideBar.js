import React, {useState} from 'react';
import MultiRangeSlider from "./multiRangeSlider";
import NavBar from "./NavBar";
import {NavLink, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    CATEGORY_CLASSIC_ROUTE,
    CATEGORY_EKOSHPON_LIGHT_ROUTE,
    CATEGORY_EKOSHPON_ROUTE,
    CATEGORY_WHITE_ROUTE
} from "../utils/consts";

const SideBar = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const priceFilter = useSelector(state => state.priceFilter)
    const [collapse1, setCollapse1] = useState(true);
    const [collapse2, setCollapse2] = useState(false);
    const [collapse3, setCollapse3] = useState(true);
    const [collapse4, setCollapse4] = useState(true);


    return (
        <aside className="col-lg-3 sidebar">
            <div className="widget d-none d-lg-block">
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
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!">Дверные ручки</a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#!">Дверные петли</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!">Ригеля и ограничители</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="widget">
                <span className="widget-title">Фтльтры <a onClick={() => {dispatch({type: 'SET_DEFAULT_PRICE'})}} className="small text-red">очистить</a></span>
                <div className="accordion" id="accordion-1">

                    <div className="card">
                        <div className="card-header" id="heading-1-3">
                            <h5 className="mb-0">
                                <button onClick={() => {
                                    setCollapse3(!collapse3)
                                }} className="btn btn-link collapsed" type="button" data-toggle="collapse"
                                        data-target="#collapse-1-3" aria-expanded={collapse3 ? 'true' : 'false'}
                                        aria-controls="collapse-1-3">
                                    Вид
                                </button>
                            </h5>
                        </div>
                        <div id="collapse-1-3" className={collapse3 ? 'collapse show' : 'collapse'}
                             aria-labelledby="heading-1-3">
                            <div className="card-body">
                                <div className="custom-control custom-checkbox mb-1">
                                    <input type="checkbox"
                                           className="custom-control-input" id="customCheck1"/>
                                    <label className="custom-control-label" htmlFor="customCheck1">
                                        Остекленные
                                    </label>
                                </div>
                                <div className="custom-control custom-checkbox mb-1">
                                    <input type="checkbox"
                                           className="custom-control-input" id="customCheck2"/>
                                    <label className="custom-control-label" htmlFor="customCheck2">
                                        Глухие
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="heading-1-4">
                            <h5 className="mb-0">
                                <button onClick={() => {
                                    setCollapse4(!collapse4)
                                }} className="btn btn-link collapsed" type="button" data-toggle="collapse"
                                        data-target="#collapse-1-4" aria-expanded={collapse4 ? 'true' : 'false'}
                                        aria-controls="collapse-1-4">
                                    Цена
                                </button>
                            </h5>
                        </div>
                        <div id="collapse-1-4" className={collapse4 ? 'collapse show' : 'collapse'}
                             aria-labelledby="heading-1-4">
                            <div className="card-body pb-5 pl-2 pr-2">
                                {priceFilter.minPrice !== 0 && (<MultiRangeSlider
                                    min={priceFilter.minPrice}
                                    max={priceFilter.maxPrice}
                                    onChange={({min, max}) => {}}
                                />)}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default SideBar;