import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {useLocation, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchDoor} from "../actions/door";
import InfiniteCarousel from "react-leaf-carousel";
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Modal from "./Modal";
import AdditionCat1 from "./AdditionCat1";
import AdditionCat2 from "./AdditionCat2";
import {fetchDoorhandle} from "../actions/doorhandle";
import {CATEGORY_FURNITURE_DOORHANDLE_ROUTE, CATEGORY_FURNITURE_LATCH_ROUTE} from "../utils/consts";
import {fetchLatch} from "../actions/latch";
import AccordionDoorhandle from "./AccordionDoorhandle";
import AccordionLatch from "./AccordionLatch";


const ProductFurniture = () => {
    const {id} = useParams();
    const location = useLocation();
    const dispatch = useDispatch();
    const furniture = useSelector(state => state.furnitureDetail.furniture);
    const alert = useSelector(state => state.alert);
    const showModal = useSelector(state => state.modal.show)
    const [collapse1, setCollapse1] = useState(true);
    const [collapse2, setCollapse2] = useState(false);
    const [generalPrice, setGeneralPrice] = useState(0);
    const [countProduct, setCountProduct] = useState(1);
    const [delivery, setDelivery] = useState(false);
    const [order, setOrder] = useState({
        title: '',
        price: 0,
        phoneNumber: '',
        additions: '',
        amount: 1,
        name: '',
        width: '',
        height: '',
        decor: ''
    });
    useEffect(() => {
        if (location.pathname.indexOf(CATEGORY_FURNITURE_DOORHANDLE_ROUTE) !== -1) {
            dispatch(fetchDoorhandle(id))
        } else if (location.pathname.indexOf(CATEGORY_FURNITURE_LATCH_ROUTE) !== -1) {
            dispatch(fetchLatch(id))
        }
    }, [])
    useEffect(() => {
        setGeneralPrice(furniture.price)
    }, [furniture.price])
    useEffect(() => {
        setOrder({
            title: furniture.title,
            price: furniture.price,
            amount: 1,
            phoneNumber: order.phoneNumber,
            name: order.name,
            additions: order.additions,
            width: '',
            height: '',
            decor: ''
        })
    }, [furniture])


    const openTab1 = (e) => {
        setCollapse1(!collapse1);
    }

    const openTab2 = (e) => {
        setCollapse2(!collapse2);
    }

    const soldCheckbox = ({target: {checked}}, value, addition) => {
        if (checked === true) {
            if (addition !== 'Доставка по городу до парадной-1400₽') {
                setGeneralPrice(generalPrice + value * countProduct);
            } else {
                // setAdditionalPrice(additionalPrice + value);
                setGeneralPrice(generalPrice + value);
            }

            setOrder({
                title: order.title,
                price: order.price,
                additions: order.additions + addition + '\n',
                amount: order.amount,
                phoneNumber: order.phoneNumber,
                name: order.name,
                width: '',
                height: '',
                decor: ''
            })
        } else {
            if (addition !== 'Доставка по городу до парадной-1400₽') {
                setGeneralPrice(generalPrice - value * countProduct);
            } else {
                // setAdditionalPrice(additionalPrice - value);
                setGeneralPrice(generalPrice - value);
            }
            setOrder({
                title: order.title,
                price: order.price,
                additions: order.additions.replace(addition + '\n', ''),
                order: order.amount,
                phoneNumber: order.phoneNumber,
                name: order.name,
                width: '',
                height: '',
                decor: ''
            })
        }
        if (addition === 'Доставка по городу до парадной-1400₽' && checked === true) {
            setDelivery(true);
        } else if (addition === 'Доставка по городу до парадной-1400₽' && checked === false) {
            setDelivery(false);
        }

    };

    const openModal = () => {
        dispatch({type: 'SHOW_MODAL'})
    }


    const hideAlert = () => {
        dispatch({type: "HIDE_ALERT"})
    }

    const upCount = () => {
        if (delivery === true) {
            setCountProduct(countProduct + 1);
            setGeneralPrice(generalPrice + furniture.price);
        } else {
            setCountProduct(countProduct + 1);
            setGeneralPrice(generalPrice + furniture.price);
        }
        setOrder({
            title: order.title,
            price: order.price,
            additions: order.additions,
            amount: order.amount + 1,
            phoneNumber: order.phoneNumber,
            name: order.name,
            width: '',
            height: '',
            decor: ''
        })

    }

    const downCount = () => {
        if (countProduct > 1) {
            if (delivery === true) {
                setCountProduct(countProduct - 1);
                setGeneralPrice(generalPrice - furniture.price);
            } else {
                setCountProduct(countProduct - 1);
                setGeneralPrice(generalPrice - furniture.price);
            }

            setOrder({
                title: order.title,
                price: order.price,
                additions: order.additions,
                amount: order.amount - 1,
                phoneNumber: order.phoneNumber,
                name: order.name,
                width: '',
                height: '',
                decor: ''
            })
        }

    }
    useEffect(() => {
        if (furniture.image !== undefined && Array.isArray(furniture.image) !== true) {
            furniture.image = furniture.image.split(';');
        }
    }, [furniture])


    return (
        <section className="hero bg-white mb-2">
            <div className="container">
                <div
                    className={alert.show ? "alert alert-success alert-dismissible fade show" : "alert alert-success alert-dismissible fade"}
                    role="alert">
                    <strong>Заказ получен!</strong> Оператор перезвонит в ближайшее время.
                    <button onClick={() => hideAlert()} type="button" className="close" data-dismiss="alert"
                            aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="row gutter-2 gutter-md-4 justify-content-between">
                    {/*carousel*/}
                    <div className="col-lg-5 ml-4">
                        <Carousel infiniteLoop={true} showStatus={false} selectedItem={0}>
                            {Array.isArray(furniture.image) === true && furniture.image.map((elem) => (
                                <div className="card card-product">
                                    <figure className="card-image">
                                        <a href="" className="action"><i className="icon-heart"></i></a>
                                        <img src={`https://dveri-arsenal.ru:444/static/images/furnitura/${elem.trim()}`}/>
                                    </figure>
                                </div>
                            ))}
                        </Carousel>
                    </div>

                    <div className="col-lg-6 mr-4 ">

                        {/*description*/}
                        <div className="row">
                            <div className="col-12">
                                <span className="eyebrow text-muted">{location.pathname.indexOf(CATEGORY_FURNITURE_DOORHANDLE_ROUTE) !== -1 && 'Дверная ручка' ||
                                location.pathname.indexOf(CATEGORY_FURNITURE_LATCH_ROUTE) !== -1 && 'Замок'}</span>
                                <h1>{furniture.title}</h1>
                                <span className="price fs-18">{generalPrice}₽</span>
                            </div>
                        </div>
                        <div className="custom-control custom-checkbox mb-1">
                            <input onChange={e => soldCheckbox(e, 1400, 'Доставка по городу до парадной-1400₽')}
                                   type="checkbox"
                                   className="custom-control-input" id="customCheck10"/>
                            <label className="custom-control-label" htmlFor="customCheck10">
                                Доставка по городу до парадной-1400₽
                            </label>
                        </div>
                        {/*accordion*/}
                        {location.pathname.indexOf(CATEGORY_FURNITURE_DOORHANDLE_ROUTE) !== -1 &&
                        <AccordionDoorhandle collapse1={collapse1}
                                             collapse2={collapse2}
                                             furniture={furniture}
                                             openTab1={openTab1}
                                             openTab2={openTab2} />
                        || location.pathname.indexOf(CATEGORY_FURNITURE_LATCH_ROUTE) !== -1 &&
                        <AccordionLatch collapse1={collapse1}
                                        collapse2={collapse2}
                                        furniture={furniture}
                                        openTab1={openTab1}
                                        openTab2={openTab2} />}


                        <div className="row gutter-2">
                            <div className="col-12">
                                <div className="form-group">
                                    <label>Количество</label>
                                    <div className="col-3">
                                        <div className="row">
                                            <button onClick={() => {
                                                downCount()
                                            }} type="button" className="btn btn-sm btn-primary col-3">-
                                            </button>
                                            <input value={countProduct} className="form-control form-control-sm col-4"
                                                   type="text"/>
                                            <button onClick={() => {
                                                upCount()
                                            }} type="button" className="btn btn-sm btn-primary col-3">+
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <a onClick={openModal} className="btn btn-block btn-primary">Заказать</a>
                            </div>
                            {showModal && (<Modal order={order} price={generalPrice}/>)}
                        </div>


                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProductFurniture;