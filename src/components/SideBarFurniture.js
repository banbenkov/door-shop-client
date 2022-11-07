import React, {useState} from 'react';
import MultiRangeSlider from "./multiRangeSlider";
import NavBar from "./NavBar";
import {NavLink, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    CATEGORY_CLASSIC_ROUTE,
    CATEGORY_EKOSHPON_LIGHT_ROUTE,
    CATEGORY_EKOSHPON_ROUTE, CATEGORY_EMAL_ROUTE, CATEGORY_FURNITURE_DOORHANDLE_ROUTE,
    CATEGORY_WHITE_ROUTE
} from "../utils/consts";
import CatalogMenu from "./CatalogMenu";

const SideBarFurniture = () => {

    return (
        <aside className="col-lg-3 sidebar">
            <CatalogMenu />
        </aside>
    );
};

export default SideBarFurniture;