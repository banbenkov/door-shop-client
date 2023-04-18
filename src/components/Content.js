import React, {useEffect, useState} from 'react';
import Card from "./Card";
import styles from '../css/style.css'
import {fetchDoors} from "../actions/door";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useParams} from "react-router-dom";
import {
    CATEGORY_CLASSIC_ROUTE,
    CATEGORY_EKOSHPON_LIGHT_ROUTE,
    CATEGORY_EKOSHPON_ROUTE, CATEGORY_EMAL_ROUTE, CATEGORY_EMALIT_ROUTE, CATEGORY_SOSNA_ROUTE,
    CATEGORY_WHITE_ROUTE
} from "../utils/consts";


const Content = () => {
        const location = useLocation();
        const dispatch = useDispatch()
        const doorsFetch = useSelector(state => state.door.doors)
        const priceFilter = useSelector(state => state.priceFilter)
        const viewFilter = useSelector(state => state.viewFilter)
        const [collapse, setCollapse] = useState(false);
        const [sort, setSort] = useState(false);
        const [currentPage, setCurrentPage] = useState(1);
        const [doorPerPage] = useState(6)
        let doors = [];
        let categoryName = '';
        let lastDoorIndex = 0;
        let firstDoorIndex = 0;
        let currentDoors = [];
        let pageNumbers = [];

        useEffect(() => {
            dispatch(fetchDoors())
        }, [])
        useEffect(() => {
            window.scrollTo(0, 0);
        }, [currentPage]);
        useEffect(() => {
            setCurrentPage(1)
        }, [viewFilter])
        useEffect(() => {
            setCurrentPage(1)
        }, [location])
        switch (location.pathname) {
            case CATEGORY_EKOSHPON_LIGHT_ROUTE:
                doors = doorsFetch.filter(door => door.category === '1'
                    && door.price >= priceFilter.currMinPrice
                    && door.price <= priceFilter.currMaxPrice
                    && ((viewFilter.dg && door.view === 1) || (viewFilter.do && door.view === 2)) );
                categoryName = 'Экошпон ЛАЙТ'
                break;
            case CATEGORY_EKOSHPON_ROUTE:
                doors = doorsFetch.filter(door => door.category === '2'
                    && door.price >= priceFilter.currMinPrice
                    && door.price <= priceFilter.currMaxPrice
                    && ((viewFilter.dg && door.view === 1) || (viewFilter.do && door.view === 2)) );
                categoryName = 'Экошпон'
                break;
            case CATEGORY_WHITE_ROUTE:
                doors = doorsFetch.filter(door => door.category === '3'
                    && door.price >= priceFilter.currMinPrice
                    && door.price <= priceFilter.currMaxPrice
                    && ((viewFilter.dg && door.view === 1) || (viewFilter.do && door.view === 2)) );
                categoryName = 'Белые двери'
                break;
            case CATEGORY_CLASSIC_ROUTE:
                doors = doorsFetch.filter(door => door.category === '4'
                    && door.price >= priceFilter.currMinPrice
                    && door.price <= priceFilter.currMaxPrice
                    && ((viewFilter.dg && door.view === 1) || (viewFilter.do && door.view === 2)) );
                categoryName = 'Классика';
                break;
            case CATEGORY_EMAL_ROUTE:
                doors = doorsFetch.filter(door => door.category === '5'
                    && door.price >= priceFilter.currMinPrice
                    && door.price <= priceFilter.currMaxPrice
                    && ((viewFilter.dg && door.view === 1) || (viewFilter.do && door.view === 2)) );
                categoryName = 'Эмаль';
                break;
            case CATEGORY_EMALIT_ROUTE:
                doors = doorsFetch.filter(door => door.category === '6'
                    && door.price >= priceFilter.currMinPrice
                    && door.price <= priceFilter.currMaxPrice
                    && ((viewFilter.dg && door.view === 1) || (viewFilter.do && door.view === 2)) );
                categoryName = 'Эмалит';
                break;
            case CATEGORY_SOSNA_ROUTE:
                doors = doorsFetch.filter(door => door.category === '7'
                    && door.price >= priceFilter.currMinPrice
                    && door.price <= priceFilter.currMaxPrice
                    && ((viewFilter.dg && door.view === 1) || (viewFilter.do && door.view === 2)) );
                categoryName = 'Массив сосны';
                break;
            default:
                doors = doorsFetch.filter(door => door.price >= priceFilter.currMinPrice
                    && door.price <= priceFilter.currMaxPrice
                    && ((viewFilter.dg && door.view === 1) || (viewFilter.do && door.view === 2)) );
                categoryName = 'Все двери'

        }

        if (sort === false) {
            doors.sort((a, b) => a.rate - b.rate);
        } else {
            doors.sort((a, b) => a.price - b.price);
        }

        useEffect(() => {
            if (sort === false) {
                doors.sort((a, b) => a.rate - b.rate);
            } else {
                doors.sort((a, b) => a.price - b.price);
            }
        }, [sort]);




        lastDoorIndex = currentPage * doorPerPage;
        firstDoorIndex = lastDoorIndex - doorPerPage;
        currentDoors = doors.slice(firstDoorIndex, lastDoorIndex);
        pageNumbers = [];
        for (let i = 1; i <= Math.ceil(doors.length / doorPerPage); i++) {
            pageNumbers.push(i)
        }


        const paginate = (pageNumber) => setCurrentPage(pageNumber);
        const nextPaginate = () => setCurrentPage(currentPage + 1);
        const prevPaginate = () => setCurrentPage(currentPage - 1);

        const clickDropDown = () => {
            setCollapse(!collapse);
        }
        const  clickSort = () => {
            setCollapse(!collapse);
            setSort(!sort);
        }


        return (
            <div className="col-lg-9">
                <div className="row gutter-1 align-items-end">
                    <div className="col-md-6">
                        <h1>{categoryName}</h1>
                    </div>
                    <div className="col-md-6 text-md-right">
                        <ul className="list list--horizontal list--separated text-muted fs-14">

                            <li>
                      <span>Сортировать по
                      <span className={collapse === true ? 'dropdown show' : 'dropdown'}>
                        <a onClick={() => {clickDropDown()}} className="dropdown-toggle underline" role="button" id="dropdownMenuLink"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {sort ? ' Цене' : ' Популярности'}
                        </a>
                        <span className={collapse === true ? 'dropdown-menu show' : 'dropdown-menu'}
                              aria-labelledby="dropdownMenuLink">
                          <a onClick={() => {clickSort()}} className="dropdown-item">{sort ? ' Популярности' : ' Цене'}</a>
                        </span>
                      </span>
                    </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row gutter-1">
                    {doors.length === 0 ? 'Товаров нет' : currentDoors.map((door, index) => (
                        <Card door={door}/>
                    ))}


                </div>

                <div className="row">
                    <div className="col">
                        <nav aria-label="Page navigation">
                            <ul className="pagination">
                                {currentPage > 1 ?
                                    (<li onClick={() => prevPaginate()} className="page-item"><a
                                        className="page-link">Предыдущая</a></li>)
                                    : (<li className="page-item"><a className="page-link none-active">Предыдущая</a>
                                    </li>)
                                }
                                {pageNumbers.map((number) => (
                                    <li onClick={() => paginate(number)} key={number}
                                        className={`page-item ${currentPage === number && 'active'} `}><a
                                        className="page-link">{number}</a></li>
                                ))}
                                {currentPage < pageNumbers.length ?
                                    (<li onClick={() => nextPaginate()} className="page-item"><a
                                        className="page-link">Следующая</a></li>)
                                    : (<li className="page-item"><a className="page-link none-active">Следующая</a>
                                    </li>)
                                }

                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
;

export default Content;