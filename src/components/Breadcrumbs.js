import React, {useEffect} from 'react';
import {NavLink, useLocation} from "react-router-dom";
import {
    CATEGORY_CLASSIC_ROUTE,
    CATEGORY_EKOSHPON_LIGHT_ROUTE,
    CATEGORY_EKOSHPON_ROUTE,
    CATEGORY_EMAL_ROUTE,
    CATEGORY_EMALIT_ROUTE,
    CATEGORY_FURNITURE_DOORHANDLE_ROUTE,
    CATEGORY_FURNITURE_LATCH_ROUTE, CATEGORY_SOSNA_ROUTE,
    CATEGORY_WHITE_ROUTE
} from "../utils/consts";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

const Breadcrumbs = () => {
    const location = useLocation();
    const {id} = useParams()
    let nameCategory = '';
    let linkCategory = '';
    let door = {};
    let furniture = {};
    let nameCategoryDoor;
    let linkCategoryDoor;
    let orderName;


    door = useSelector(state => state.doorDetail.door);
    furniture = useSelector(state => state.furnitureDetail.furniture)
    if (door !== {}) {
        if (location.pathname.indexOf(CATEGORY_FURNITURE_DOORHANDLE_ROUTE) !== -1) {
            nameCategoryDoor = 'Дверные ручки';
            linkCategoryDoor = CATEGORY_FURNITURE_DOORHANDLE_ROUTE
            orderName = furniture.title;
        } else if (location.pathname.indexOf(CATEGORY_FURNITURE_LATCH_ROUTE) !== -1) {
            nameCategoryDoor = 'Замки';
            linkCategoryDoor = CATEGORY_FURNITURE_LATCH_ROUTE
            orderName = furniture.title;
        }
        else {
            switch (door.category) {
                case '1':
                    nameCategoryDoor = 'Экошпон Лайт';
                    linkCategoryDoor = CATEGORY_EKOSHPON_LIGHT_ROUTE;
                    orderName = door.title;
                    break;
                case '2':
                    nameCategoryDoor = 'Экошпон';
                    linkCategoryDoor = CATEGORY_EKOSHPON_ROUTE;
                    orderName = door.title;
                    break;
                case '3':
                    nameCategoryDoor = 'Белые двери';
                    linkCategoryDoor = CATEGORY_WHITE_ROUTE;
                    orderName = door.title;
                    break;
                case '4':
                    nameCategoryDoor = 'Классика';
                    linkCategoryDoor = CATEGORY_CLASSIC_ROUTE;
                    orderName = door.title;
                    break;
                case '5':
                    nameCategoryDoor = 'Эмаль';
                    linkCategoryDoor = CATEGORY_EMAL_ROUTE;
                    orderName = door.title;
                    break;
                case '6':
                    nameCategoryDoor = 'Эмалит';
                    linkCategoryDoor = CATEGORY_EMALIT_ROUTE;
                    orderName = door.title;
                    break;
                case '7':
                    nameCategoryDoor = 'Массив сосны';
                    linkCategoryDoor = CATEGORY_SOSNA_ROUTE;
                    orderName = door.title;
                    break;
                default:
                    nameCategoryDoor = 'Все двери';
                    linkCategoryDoor = '/doors'
                    orderName = door.title;

            }
        }

    }


    switch (location.pathname) {
        case CATEGORY_EKOSHPON_LIGHT_ROUTE:
            nameCategory = 'Экошпон Лайт';
            linkCategory = CATEGORY_EKOSHPON_LIGHT_ROUTE;
            break;
        case CATEGORY_EKOSHPON_ROUTE:
            nameCategory = 'Экошпон';
            linkCategory = CATEGORY_EKOSHPON_ROUTE;
            break;
        case CATEGORY_WHITE_ROUTE:
            nameCategory = 'Белые двери';
            linkCategory = CATEGORY_WHITE_ROUTE;
            break;
        case CATEGORY_CLASSIC_ROUTE:
            nameCategory = 'Классика';
            linkCategory = CATEGORY_CLASSIC_ROUTE;
            break;
        case CATEGORY_EMAL_ROUTE:
            nameCategory = 'Эмаль';
            linkCategory = CATEGORY_EMAL_ROUTE;
            break;
        case CATEGORY_EMALIT_ROUTE:
            nameCategory = 'Эмалит';
            linkCategory = CATEGORY_EMALIT_ROUTE;
            break;
        case CATEGORY_FURNITURE_DOORHANDLE_ROUTE:
            nameCategory = 'Дверные ручки';
            linkCategory = CATEGORY_FURNITURE_DOORHANDLE_ROUTE;
            break;
        case CATEGORY_FURNITURE_LATCH_ROUTE:
            nameCategory = 'Замки';
            linkCategory = CATEGORY_FURNITURE_LATCH_ROUTE;
            break;
        case CATEGORY_SOSNA_ROUTE:
            nameCategory = 'Массив сосны';
            linkCategory = CATEGORY_SOSNA_ROUTE;
            break;
        default:
            nameCategory = 'Все двери';
            linkCategory = '/doors';

    }


    return (
        <section className="breadcrumbs bg-light">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><NavLink to='/'>Главная</NavLink></li>
                                <li className="breadcrumb-item active"><NavLink
                                    to={id !== undefined ? linkCategoryDoor : linkCategory}>{id !== undefined ? nameCategoryDoor : nameCategory}</NavLink>
                                </li>
                                {id !== undefined && (<li className="breadcrumb-item">{orderName}</li>)}
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Breadcrumbs;