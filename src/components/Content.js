import React, {useEffect, useState} from 'react';
import Card from "./Card";
import styles from '../css/style.css'
import {fetchDoors} from "../actions/door";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useParams, useHistory} from "react-router-dom";
import {
    CATEGORY_CLASSIC_ROUTE, CATEGORY_DUB_ROUTE,
    CATEGORY_3D_ROUTE,
    CATEGORY_EKOSHPON_ROUTE, CATEGORY_EMAL_ROUTE, CATEGORY_EMALIT_ROUTE, CATEGORY_SOSNA_ROUTE,
    CATEGORY_WHITE_ROUTE, CATEGORY_EKOSHPON_LIGHT_ROUTE
} from "../utils/consts";
import Loading from "./Loading";
import {priceFormatter} from "../utils/formatter";


const Content = () => {
        const location = useLocation();
        const dispatch = useDispatch();
        const doorsFetch = useSelector(state => state.door.doors);
        const doorsLoading = useSelector(state => state.door.loading);
        const priceFilter = useSelector(state => state.priceFilter);
        const viewFilter = useSelector(state => state.viewFilter);
        const currentPage = useSelector(state => state.currentPage);
        const [collapse, setCollapse] = useState(false);
        const [sort, setSort] = useState(false);
        // const [currentPage, setCurrentPage] = useState(1);
        const [doorPerPage] = useState(6);
        let doors = [];
        let categoryName = '';
        let lastDoorIndex = 0;
        let firstDoorIndex = 0;
        let currentDoors = [];
        let pageNumbers = [];

        useEffect(() => {
            dispatch(fetchDoors());
        }, [])
        useEffect(() => {
            window.scrollTo(0, 0);
        }, [currentPage]);
        // useEffect(() => {
        //     // dispatch({type: 'START_PAGE'})
        // }, [viewFilter])
        // useEffect(() => {
        //     dispatch({type: 'START_PAGE'})
        // }, [location])

        if (location.state === null) {
            switch (location.pathname) {
                case CATEGORY_3D_ROUTE:
                    doors = doorsFetch.filter(door => door.category === '1'
                        && priceFormatter(door.price, 0) >= priceFilter.currMinPrice
                        && priceFormatter(door.price, 0) <= priceFilter.currMaxPrice
                        && ((viewFilter.dg && door.view === 1) || (viewFilter.do && door.view === 2)));
                    categoryName = '3D покрытие'
                    break;
                case CATEGORY_EKOSHPON_ROUTE:
                    doors = doorsFetch.filter(door => door.category === '2'
                        && priceFormatter(door.price, 0) >= priceFilter.currMinPrice
                        && priceFormatter(door.price, 0) <= priceFilter.currMaxPrice
                        && ((viewFilter.dg && door.view === 1) || (viewFilter.do && door.view === 2)));
                    categoryName = 'Экошпон'
                    break;
                case CATEGORY_WHITE_ROUTE:
                    doors = doorsFetch.filter(door => door.category === '3'
                        && priceFormatter(door.price, 0) >= priceFilter.currMinPrice
                        && priceFormatter(door.price, 0) <= priceFilter.currMaxPrice
                        && ((viewFilter.dg && door.view === 1) || (viewFilter.do && door.view === 2)));
                    categoryName = 'Белые двери'
                    break;
                case CATEGORY_CLASSIC_ROUTE:
                    doors = doorsFetch.filter(door => door.category === '4'
                        && priceFormatter(door.price, 0) >= priceFilter.currMinPrice
                        && priceFormatter(door.price, 0) <= priceFilter.currMaxPrice
                        && ((viewFilter.dg && door.view === 1) || (viewFilter.do && door.view === 2)));
                    categoryName = 'Классика';
                    break;
                case CATEGORY_EMAL_ROUTE:
                    doors = doorsFetch.filter(door => door.category === '5'
                        && priceFormatter(door.price, 0) >= priceFilter.currMinPrice
                        && priceFormatter(door.price, 0) <= priceFilter.currMaxPrice
                        && ((viewFilter.dg && door.view === 1) || (viewFilter.do && door.view === 2)));
                    categoryName = 'Эмаль';
                    break;
                case CATEGORY_EMALIT_ROUTE:
                    doors = doorsFetch.filter(door => door.category === '6'
                        && priceFormatter(door.price, 0) >= priceFilter.currMinPrice
                        && priceFormatter(door.price, 0) <= priceFilter.currMaxPrice
                        && ((viewFilter.dg && door.view === 1) || (viewFilter.do && door.view === 2)));
                    categoryName = 'Эмалит';
                    break;
                case CATEGORY_SOSNA_ROUTE:
                    doors = doorsFetch.filter(door => door.category === '7'
                        && priceFormatter(door.price, 0) >= priceFilter.currMinPrice
                        && priceFormatter(door.price, 0) <= priceFilter.currMaxPrice
                        && ((viewFilter.dg && door.view === 1) || (viewFilter.do && door.view === 2)));
                    categoryName = 'Массив сосны';
                    break;
                case CATEGORY_DUB_ROUTE:
                    doors = doorsFetch.filter(door => door.category === '8'
                        && priceFormatter(door.price, 0) >= priceFilter.currMinPrice
                        && priceFormatter(door.price, 0) <= priceFilter.currMaxPrice
                        && ((viewFilter.dg && door.view === 1) || (viewFilter.do && door.view === 2)));
                    categoryName = 'Массив дуба';
                    break;
                case CATEGORY_EKOSHPON_LIGHT_ROUTE:
                    doors = doorsFetch.filter(door => door.category === '9'
                        && priceFormatter(door.price, 0) >= priceFilter.currMinPrice
                        && priceFormatter(door.price, 0) <= priceFilter.currMaxPrice
                        && ((viewFilter.dg && door.view === 1) || (viewFilter.do && door.view === 2)));
                    categoryName = 'Экошпон лайт';
                    break;
                default:
                    doors = doorsFetch.filter(door => priceFormatter(door.price, 0) >= priceFilter.currMinPrice
                        && priceFormatter(door.price, 0) <= priceFilter.currMaxPrice
                        && ((viewFilter.dg && door.view === 1) || (viewFilter.do && door.view === 2)));
                    categoryName = 'Все двери'

            }
        } else {
            doors = doorsFetch.filter(door => door.title.toLowerCase().trim().includes(location.state.from.toLowerCase().trim()));
            categoryName = 'Результаты поиска';
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


        useEffect(() => {
            if (currentDoors.length === 0 && doors.length !== 0) {
                dispatch({type: 'START_PAGE'})
                lastDoorIndex = currentPage * doorPerPage;
                firstDoorIndex = lastDoorIndex - doorPerPage;
                currentDoors = doors.slice(firstDoorIndex, lastDoorIndex);
                pageNumbers = [];
                for (let i = 1; i <= Math.ceil(doors.length / doorPerPage); i++) {
                    pageNumbers.push(i)
                }
            }
        }, [currentDoors])


        const paginate = (pageNumber) => dispatch({type: 'SET_PAGE', payload: pageNumber});
        const nextPaginate = () => dispatch({type: 'INCREMENT_PAGE', payload: currentPage});
        const prevPaginate = () => dispatch({type: 'DECREMENT_PAGE', payload: currentPage});

        const clickDropDown = () => {
            setCollapse(!collapse);
        }
        const clickSort = () => {
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
                        <a onClick={() => {
                            clickDropDown()
                        }} className="dropdown-toggle underline" role="button" id="dropdownMenuLink"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {sort ? ' Цене' : ' Популярности'}
                        </a>
                        <span className={collapse === true ? 'dropdown-menu show' : 'dropdown-menu'}
                              aria-labelledby="dropdownMenuLink">
                          <a onClick={() => {
                              clickSort()
                          }} className="dropdown-item">{sort ? ' Популярности' : ' Цене'}</a>
                        </span>
                      </span>
                    </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row gutter-1">
                    {( doorsLoading === true && <Loading /> ) || ( doors.length === 0 && 'Товары по заданным фильтрам отсутствуют' ) || currentDoors.map((door, index) => (
                        <Card door={door}/>
                    ))}


                </div>

                <div className="row">
                    <div className="col">
                        <nav aria-label="Page navigation">
                            <ul className="pagination">
                                {currentPage > 1 ?
                                    (<li onClick={() => prevPaginate()} className="page-item"><a
                                        className="page-link">←</a></li>)
                                    : (<li className="page-item"><a className="page-link none-active">←</a>
                                    </li>)
                                }
                                {currentPage > 4 && (
                                    <li className="page-item"><a className="page-link none-active">...</a></li>)}
                                {pageNumbers.map((number) => {
                                    if (currentPage - number < 4 && currentPage - number > -4) {
                                        return (
                                            <li onClick={() => paginate(number)} key={number}
                                                className={`page-item ${currentPage === number && 'active'} `}><a
                                                className="page-link">{number}</a></li>
                                        )
                                    }
                                })}
                                {pageNumbers.length - currentPage > 4 && (
                                    <li className="page-item"><a className="page-link none-active">...</a></li>)}
                                {currentPage < pageNumbers.length ?
                                    (<li onClick={() => nextPaginate()} className="page-item"><a
                                        className="page-link">→</a></li>)
                                    : (<li className="page-item"><a className="page-link none-active">→</a>
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