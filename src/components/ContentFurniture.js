import React, {useEffect, useState} from 'react';
import Card from "./Card";
import styles from '../css/style.css'
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useParams} from "react-router-dom";
import {
    CATEGORY_CLASSIC_ROUTE,
    CATEGORY_EKOSHPON_LIGHT_ROUTE,
    CATEGORY_EKOSHPON_ROUTE, CATEGORY_EMAL_ROUTE, CATEGORY_FURNITURE_DOORHANDLE_ROUTE, CATEGORY_FURNITURE_LATCH_ROUTE,
    CATEGORY_WHITE_ROUTE
} from "../utils/consts";
import {fetchDoorhandles} from "../actions/doorhandle";
import CardFurniture from "./CardFurniture";
import {fetchLatches} from "../actions/latch";


const ContentFurniture = () => {
        const location = useLocation();
        const dispatch = useDispatch()
        const furnitureFetch = useSelector(state => state.furniture.furniture)
        const [collapse, setCollapse] = useState(false);
        const [sort, setSort] = useState(false);
        const [currentPage, setCurrentPage] = useState(1);
        const [doorPerPage] = useState(6)
        let furniture = [];
        let categoryName = '';
        let lastDoorIndex = 0;
        let firstDoorIndex = 0;
        let currentDoors = [];
        let pageNumbers = [];

        useEffect(() => {
            if (location.pathname === CATEGORY_FURNITURE_DOORHANDLE_ROUTE) {
                dispatch(fetchDoorhandles())
            } else if (location.pathname === CATEGORY_FURNITURE_LATCH_ROUTE) {
                dispatch(fetchLatches())
            }

        }, [location])
        useEffect(() => {
            window.scrollTo(0, 0);
        }, [currentPage]);
        useEffect(() => {
            setCurrentPage(1)
        }, [location])
        switch (location.pathname) {
            case CATEGORY_FURNITURE_DOORHANDLE_ROUTE:
                categoryName = 'Дверные ручки'
                break;
            default:
                categoryName = 'Фурнитура'
        }

        if (sort === false) {
            furnitureFetch.sort((a, b) => a.rate - b.rate);
        } else {
            furnitureFetch.sort((a, b) => a.price - b.price);
        }

        useEffect(() => {
            if (sort === false) {
                furnitureFetch.sort((a, b) => a.rate - b.rate);
            } else {
                furnitureFetch.sort((a, b) => a.price - b.price);
            }
        }, [sort]);


        lastDoorIndex = currentPage * doorPerPage;
        firstDoorIndex = lastDoorIndex - doorPerPage;
        currentDoors = furnitureFetch.slice(firstDoorIndex, lastDoorIndex);
        pageNumbers = [];
        for (let i = 1; i <= Math.ceil(furnitureFetch.length / doorPerPage); i++) {
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
                    {furnitureFetch.length === 0 ? 'Товаров нет' : currentDoors.map((door, index) => (
                        <CardFurniture furniture={door}/>
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

export default ContentFurniture;