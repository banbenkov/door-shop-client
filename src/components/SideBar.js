import React, {useState} from 'react';
import MultiRangeSlider from "./multiRangeSlider";
import NavBar from "./NavBar";
import {NavLink, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    CATEGORY_CLASSIC_ROUTE,
    CATEGORY_EKOSHPON_LIGHT_ROUTE,
    CATEGORY_EKOSHPON_ROUTE, CATEGORY_EMAL_ROUTE,
    CATEGORY_WHITE_ROUTE
} from "../utils/consts";
import CatalogMenu from "./CatalogMenu";

const SideBar = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const priceFilter = useSelector(state => state.priceFilter)
    const viewFilter = useSelector(state => state.viewFilter)

    const [collapse3, setCollapse3] = useState(true);
    const [collapse4, setCollapse4] = useState(true);

    const setDgFilter = () => {
        dispatch({type: 'SET_VIEW_DG'})
    }

    const setDoFilter = () => {
        dispatch({type: 'SET_VIEW_DO'})
    }

    const clickClear = () => {
        dispatch({type: 'SET_DEFAULT_PRICE'})
        dispatch({type: 'SET_DEFAULT_VIEW'})
    }


    return (
        <aside className="col-lg-3 sidebar">
            <CatalogMenu />

            <div className="widget">
                <span className="widget-title">Фтльтры <a onClick={() => clickClear()} className="small text-red">очистить</a></span>
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
                                    <input onClick={() => setDoFilter()} type="checkbox"
                                           className="custom-control-input" id="customCheck1" checked={viewFilter.do}/>
                                    <label className="custom-control-label" htmlFor="customCheck1">
                                        Остекленные
                                    </label>
                                </div>
                                <div className="custom-control custom-checkbox mb-1">
                                    <input onClick={() => setDgFilter()} type="checkbox"
                                           className="custom-control-input" id="customCheck2" checked={viewFilter.dg}/>
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