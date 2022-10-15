import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchDoor} from "../actions/door";
import InfiniteCarousel from "react-leaf-carousel";
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Modal from "./Modal";


const Product = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const door = useSelector(state => state.doorDetail.door);
    const img = useSelector(state => state.doorImg.image);
    const showModal = useSelector(state => state.modal.show)
    let height = [];
    let width = [];
    const [collapse1, setCollapse1] = useState(true);
    const [collapse2, setCollapse2] = useState(false);
    const [additionalPrice, setAdditionalPrice] = useState(0);
    const [activeWidth, setActiveWidth] = useState(0);
    const [activeHeight, setActiveHeight] = useState(0);
    let doorPrice = 0;
    useEffect(() => {
        dispatch(fetchDoor(id))

    }, [])
    useEffect(() => {
        setAdditionalPrice(door.price)
    }, [door.price])

    height = door.height !== undefined ? door.height.split(";") : [];
    width = door.width !== undefined ? door.width.split(";") : [];
    height = height.map((elem, index) => {
        return {
            value: elem,
            isActive: index === activeHeight
        }
    })
    width = width.map((elem, index) => {
        return {
            value: elem,
            isActive: index === activeWidth
        }
    })

    const openTab1 = (e) => {
        setCollapse1(!collapse1);
    }

    const openTab2 = (e) => {
        setCollapse2(!collapse2);
    }

    const soldCheckbox = ({target: {checked}}, value) => {
        if (checked === true) {
            setAdditionalPrice(additionalPrice + value)
        } else {
            setAdditionalPrice(additionalPrice - value)
        }


    };

    const openModal = () => {
        dispatch({type: 'SHOW_MODAL'})
    }

    return (
        <section className="hero bg-white mt-2 mb-2">
            <div className="container">
                <div className="row gutter-2 gutter-md-4 justify-content-between">


                    {/*carousel*/}
                    <div className="col-lg-4 ml-6">
                        <Carousel infiniteLoop={true} showStatus={false}>
                            {img.map((elem) => (
                                <div className="card card-product">
                                    <figure className="card-image">
                                        <a href="" className="action"><i className="icon-heart"></i></a>
                                        <img src={`../images/doors/${elem}`}/>
                                    </figure>
                                </div>
                            ))}
                        </Carousel>
                    </div>

                    <div className="col-lg-6 mr-4 ">

                        {/*description*/}
                        <div className="row">
                            <div className="col-12">
                                <span className="eyebrow text-muted">Межкомнатные двери</span>
                                <h1>{door.title}</h1>
                                <span className="price fs-18">{additionalPrice}₽</span>
                            </div>
                        </div>
                        <div className="custom-control custom-checkbox mb-1">
                            <input onChange={e => soldCheckbox(e, 1000)} type="checkbox"
                                   className="custom-control-input" id="customCheck1"/>
                            <label className="custom-control-label" htmlFor="customCheck1">
                                Коробка комплект(2,5шт)-1000₽
                            </label>
                        </div>
                        <div className="custom-control custom-checkbox mb-1">
                            <input onChange={e => soldCheckbox(e, 1000)} type="checkbox"
                                   className="custom-control-input" id="customCheck2"/>
                            <label className="custom-control-label" htmlFor="customCheck2">
                                Наличник комплект(5шт)-1000₽
                            </label>
                        </div>
                        <div className="custom-control custom-checkbox mb-1">
                            <input onChange={e => soldCheckbox(e, 300)} type="checkbox" className="custom-control-input"
                                   id="customCheck3"/>
                            <label className="custom-control-label" htmlFor="customCheck3">
                                Добор-300Р
                            </label>
                        </div>
                        <div className="custom-control custom-checkbox mb-1">
                            <input onChange={e => soldCheckbox(e, 1500)} type="checkbox"
                                   className="custom-control-input" id="customCheck4"/>
                            <label className="custom-control-label" htmlFor="customCheck4">
                                Замок защелка с фиксацией "Avers" под ручку + петли(Бабочка 2шт)-1500₽
                            </label>
                        </div>
                        <div className="custom-control custom-checkbox mb-1">
                            <input onChange={e => soldCheckbox(e, 1000)} type="checkbox"
                                   className="custom-control-input" id="customCheck5"/>
                            <label className="custom-control-label" htmlFor="customCheck5">
                                Сборка в блок-1000₽
                            </label>
                        </div>
                        <div className="custom-control custom-checkbox mb-1">
                            <input onChange={e => soldCheckbox(e, 900)} type="checkbox" className="custom-control-input"
                                   id="customCheck6"/>
                            <label className="custom-control-label" htmlFor="customCheck6">
                                Ручка "Code Deco" (Испания) крепление на стяжках, не саморезы-900₽
                            </label>
                        </div>
                        <div className="custom-control custom-checkbox mb-1">
                            <input onChange={e => soldCheckbox(e, 600)} type="checkbox" className="custom-control-input"
                                   id="customCheck7"/>
                            <label className="custom-control-label" htmlFor="customCheck7">
                                Завертка сантехника "Code Deco" (Испания) на стяжках-600₽
                            </label>
                        </div>
                        <div className="custom-control custom-checkbox mb-1">
                            <input onChange={e => soldCheckbox(e, 3000)} type="checkbox"
                                   className="custom-control-input" id="customCheck8"/>
                            <label className="custom-control-label" htmlFor="customCheck8">
                                Установка-3000₽
                            </label>
                        </div>
                        <div className="custom-control custom-checkbox mb-1">
                            <input onChange={e => soldCheckbox(e, 500)} type="checkbox" className="custom-control-input"
                                   id="customCheck9"/>
                            <label className="custom-control-label" htmlFor="customCheck9">
                                Демонтаж-500Р
                            </label>
                        </div>
                        <div className="custom-control custom-checkbox mb-1">
                            <input onChange={e => soldCheckbox(e, 1400)} type="checkbox"
                                   className="custom-control-input" id="customCheck10"/>
                            <label className="custom-control-label" htmlFor="customCheck10">
                                Доставка по городу до парадной-1400₽
                            </label>
                        </div>

                        <div className="row gutter-2">
                            <div className="col-12">
                                <div className="form-group">
                                    <label>Ширина (мм)</label>
                                    <div className="btn-group-toggle btn-group-square" data-toggle="buttons">
                                        {
                                            width !== [] && width.map((elem, index) => (
                                                <label className={elem.isActive ? "btn active" : "btn"}>
                                                    <input onChange={e => setActiveWidth(index)} type="radio"
                                                           name="customRadio"
                                                           id={`option-${index + 1}`}/>{elem.value.trim()}
                                                </label>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <label>Высота (мм)</label>
                                    <div className="btn-group-toggle btn-group-square" data-toggle="buttons">
                                        {
                                            height !== [] && height.map((elem, index) => (
                                                <label className={elem.isActive ? "btn active" : "btn"}>
                                                    <input onChange={e => setActiveHeight(index)} type="radio"
                                                           name="customRadio"
                                                           id={`option-${index + 1}`}/>{elem.value.trim()}
                                                </label>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <label>Цвет</label>
                                    <div className="btn-group-toggle btn-group-square btn-group-colors"
                                         data-toggle="buttons">
                                        <label className="btn active texture-venge">
                                            <input type="radio" name="color-select" id="option-2-1" checked/>
                                        </label>
                                        <label className="btn texture-venge">
                                            <input type="radio" name="color-select" id="option-2-2"/>
                                        </label>
                                        <label className="btn text-grey">
                                            <input type="radio" name="color-select" id="option-2-3"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <a onClick={openModal} className="btn btn-block btn-primary">Заказать</a>
                            </div>
                            {showModal && (<Modal/>)}
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
                                                    <li>Коробка МДФ: {door.kmdf} мм</li>
                                                    <li>Наличник МДФ: {door.nmdf} мм</li>
                                                    <li>Доборный брус МДФ: {door.dbmdf}</li>
                                                    <li>Толщина: {door.thickness}</li>
                                                    <li>Отделка: {door.facing}</li>
                                                    <li>Стиль: {door.style}</li>
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
                                                <p>{door.description}</p>
                                            </div>
                                        </div>
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

export default Product;