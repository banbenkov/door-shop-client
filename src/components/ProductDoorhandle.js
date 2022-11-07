import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchDoor} from "../actions/door";
import InfiniteCarousel from "react-leaf-carousel";
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Modal from "./Modal";
import AdditionCat1 from "./AdditionCat1";
import AdditionCat2 from "./AdditionCat2";
import {fetchDoorhandle} from "../actions/doorhandle";


const ProductDoorhandle = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const furniture = useSelector(state => state.furnitureDetail.furniture);
    const alert = useSelector(state => state.alert);
    const showModal = useSelector(state => state.modal.show)
    const [collapse1, setCollapse1] = useState(true);
    const [collapse2, setCollapse2] = useState(false);
    const [generalPrice, setGeneralPrice] = useState(0);
    const [countProduct, setCountProduct] = useState(1);
    const [delivery, setDelivery] = useState(false)
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
        dispatch(fetchDoorhandle(id))

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
                                        <img src={`../images/furnitura/${elem.trim()}`}/>
                                    </figure>
                                </div>
                            ))}
                        </Carousel>
                    </div>

                    <div className="col-lg-6 mr-4 ">

                        {/*description*/}
                        <div className="row">
                            <div className="col-12">
                                <span className="eyebrow text-muted">Дверная ручка</span>
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
                        <div className="row">
                            <div className="col">
                                <div className="accordion" id="accordion-1">
                                    <div className="card active">
                                        <div className="card-header" id="heading-1-1">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link" type="button" data-toggle="collapse"
                                                        data-target="#collapse-1-1"
                                                        aria-expanded={`${collapse1 ? 'true' : 'false'}`}
                                                        aria-controls="collapse-1-1" onClick={openTab1}>
                                                    Характеристики
                                                </button>
                                            </h5>
                                        </div>

                                        <div id="collapse-1-1" className={`collapse ${collapse1 ? 'show' : ''}`}
                                             aria-labelledby="heading-1-1"
                                             data-parent="#accordion-1">
                                            <div className="card-body">
                                                <ul className="list list--unordered">
                                                    <li>Производитель: {furniture.manufacturer}</li>
                                                    <li>Страна: {furniture.country}</li>
                                                    <li>Вес: {furniture.weight} г</li>
                                                    <li>Габариты инд уп-ки (ШхГхВ): {furniture.dimensionsPack} мм</li>
                                                    <li>Материал: {furniture.material}</li>
                                                    <li>Тип дверей: {furniture.typeDoor}</li>
                                                    <li>Толщина двери: {furniture.weightDoor}</li>
                                                    <li>Серия: {furniture.series}</li>
                                                    <li>Способ установки: {furniture.installMethod}</li>
                                                    <li>Диаметр розетки (основания): {furniture.diameter} мм</li>
                                                    <li>Тип крепления ручки: {furniture.mountType}</li>
                                                    <li>Покрытие: {furniture.coating}</li>
                                                    <li>Форма основания: {furniture.baseShape}</li>
                                                    <li>Фиксация декоративного кольца: {furniture.fixation}</li>
                                                    <li>Длина квадрата: {furniture.csquareLength}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading-1-2">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" type="button"
                                                        data-toggle="collapse" data-target="#collapse-1-2"
                                                        aria-expanded={`${collapse2 ? 'true' : 'false'}`}
                                                        aria-controls="collapse-1-2"
                                                        onClick={openTab2}>
                                                    Описание
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse-1-2" className={`collapse ${collapse2 ? 'show' : ''}`}
                                             aria-labelledby="heading-1-2"
                                             data-parent="#accordion-1">
                                            <div className="card-body">
                                                <p>{furniture.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

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

export default ProductDoorhandle;