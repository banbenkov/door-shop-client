import React, {useEffect, useState} from 'react';
import Card from "./Card";
import styles from '../css/style.css'
import {fetchDoors} from "../actions/door";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useParams} from "react-router-dom";
import {CATEGORY_EKOSHPON_LIGHT_ROUTE, CATEGORY_EKOSHPON_ROUTE, CATEGORY_WHITE_ROUTE} from "../utils/consts";



const Content = () => {
    const location = useLocation();
    const dispatch = useDispatch()
    const doorsFetch = useSelector(state => state.door.doors)
    const [currentPage, setCurrentPage] = useState(1);
    const [doorPerPage] = useState(6)
    let doors = [];
    let categoryName = '';
    useEffect(() => {
        dispatch(fetchDoors())
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage])
    switch (location.pathname) {
        case CATEGORY_EKOSHPON_LIGHT_ROUTE:
            doors = doorsFetch.filter(door => door.category === '1');
            categoryName = 'Экошпон ЛАЙТ'
            break;
        case CATEGORY_EKOSHPON_ROUTE:
            doors = doorsFetch.filter(door => door.category === '2');
            categoryName = 'Экошпон'
            break;
        case CATEGORY_WHITE_ROUTE:
            doors = doorsFetch.filter(door => door.category === '3');
            categoryName = 'Белые двери'
            break;
        default:
            doors = doorsFetch;
            categoryName = 'Все двери'

    }

    doors.sort((a,b) => a.rate - b.rate);

    const lastDoorIndex = currentPage * doorPerPage;
    const firstDoorIndex = lastDoorIndex - doorPerPage;
    const currentDoors = doors.slice(firstDoorIndex, lastDoorIndex);
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(doors.length / doorPerPage); i++) {
        pageNumbers.push(i)
    }

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const nextPaginate = () => setCurrentPage(currentPage + 1);
    const prevPaginate = () => setCurrentPage(currentPage - 1);


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
                      <span className="dropdown">
                        <a className="dropdown-toggle underline" href="#!" role="button" id="dropdownMenuLink"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Популярности
                        </a>

                        <span className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                          <a className="dropdown-item" href="#!">Цене</a>
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
                                (<li onClick={() => prevPaginate()} className="page-item"><a className="page-link">Предыдущая</a></li>)
                                : (<li className="page-item"><a className="page-link none-active">Предыдущая</a></li>)
                            }
                            {pageNumbers.map((number) => (
                                <li onClick={() => paginate(number)} key={number} className={`page-item ${currentPage === number && 'active'} `}><a className="page-link">{number}</a></li>
                            ))}
                            {currentPage < pageNumbers.length ?
                                (<li onClick={() => nextPaginate()} className="page-item"><a className="page-link">Следующая</a></li>)
                                : (<li className="page-item"><a className="page-link none-active">Следующая</a></li>)
                            }

                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Content;