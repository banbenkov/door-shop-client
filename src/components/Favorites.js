import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {deleteFavor} from "../actions/favor";
import {useCookies} from "react-cookie";

const Favorites = () => {
    const dispatch = useDispatch();
    const favorDoors = useSelector(state => state.favorDoors.doors);
    const [cookies, setCookie] = useCookies(['userId']);

    const delFavor = (doorId) => {
        dispatch(deleteFavor(doorId, cookies.userId));
    }

    return (
        <section>
            <div className="container mb-2 mt-2">
                <div className="row gutter-1 gutter-md-2">
                    <div className="col-12">
                        <div className="bg-white p-2 p-md-3">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="sidebar-1-2" role="tabpanel"
                                     aria-labelledby="sidebar-1-2">
                                    <div className="row align-items-end">
                                        <div className="col">
                                            <h2>Избранное</h2>
                                        </div>
                                        {/*<div className="col text-right">*/}
                                        {/*    <a href="" className="underline"><i className="icon-plus"></i> add all to*/}
                                        {/*        bag</a>*/}
                                        {/*</div>*/}
                                    </div>
                                    <div className="row gutter-2">
                                        {favorDoors.length === 0 ? 'Избранных товаров нет' :
                                            favorDoors.map((elem, index) => (
                                                <div className="col-md-4">
                                                    <div className="card card-product">
                                                        <figure className="card-image">
                                                            <div onClick={() => {delFavor(elem.id)}} className="action"><i className="icon-x"></i></div>
                                                            <NavLink to={`../doors/${elem.id}`}>
                                                                <img className="img-card-favor" src={`https://dveri-arsenal.ru:444/static/images/doors/${elem.img.split(';')[0]}`}
                                                                     alt="Image"/>
                                                            </NavLink>
                                                        </figure>
                                                        <div className="card-footer">
                                                            <h3 className="card-title"><a href="">{elem.title}</a>
                                                            </h3>
                                                            <span className="price">{elem.price}₽</span>
                                                        </div>
                                                    </div>
                                                    <NavLink to={`../doors/${elem.id}`} className="btn btn-primary btn-block">Посмотреть</NavLink>
                                                </div>
                                                )
                                            )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Favorites;