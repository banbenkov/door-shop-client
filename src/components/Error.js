import React from 'react';
import {NavLink} from "react-router-dom";
import {INDEX_ROUTE} from "../utils/consts";

const Error = () => {
    return (
        <div className="container">
            <div className="row gutter-1">
                <div className="col-8 col-lg-6">
                    <div className="card card-tile">
                        <div className="equal bg-white">
                            <div className="card-body text-left">
                                <h3 className="mb-1">Ошибка 404</h3>
                                <p className="mt-1">Кажется что-то пошло не так! Страница, которую вы запрашивает, не
                                    существует. Возможно он была удалено, или вы набрали неверный адрес.
                                    Перейдите на нашу <NavLink to={INDEX_ROUTE}><span className="fs-18 underlined">главную страницу</span></NavLink> и попробуйте найти необходимую вам
                                    информацию там.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;