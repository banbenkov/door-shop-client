import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchDoor} from "../actions/door";
import InfiniteCarousel from "react-leaf-carousel";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Product = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const door = useSelector(state => state.doorDetail.door);
    const img = useSelector(state => state.doorImg.image);
    let height = [];
    let width = [];
    const [collapse1, setCollapse1] = useState(true);
    const [collapse2, setCollapse2] = useState(false);


    useEffect(() => {
        dispatch(fetchDoor(id))
    }, [])

    height = door.height !== undefined ? door.height.split(";") : [];
    width = door.width !== undefined ? door.width.split(";") : [];
    height = height.map((elem, index) => {
        return {
            value: elem,
            isActive: index === 0
        }
    })
    width = width.map((elem, index) => {
        return {
            value: elem,
            isActive: index === 0
        }
    })

    // function ImgComponent({ src, alt }) {
    //     return (
    //         <div className="card card-product">
    //             <figure className="card-image">
    //                 <a href="#!" className="action"><i className="icon-heart"></i></a>
    //                 <a href="#!">
    //                     <img src={src} alt={alt} />
    //                 </a>
    //             </figure>
    //         </div>
    //     );
    // }
    //
    // const ImgDataIterator = img.map((element) => (
    //
    //     <ImgComponent src={`../images/doors/${element.trim()}`}  alt={'Дверь'}/>
    //
    // ));

    const openTab1 = (e) => {
        setCollapse1(!collapse1);
    }

    const openTab2 = (e) => {
        setCollapse2(!collapse2);
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

                    <div className="col-lg-5 mr-4 ">

                        {/*description*/}
                        <div className="row">
                            <div className="col-12">
                                <span className="eyebrow text-muted">Межкомнатные двери</span>
                                <h1>{door.title}</h1>
                                <span className="price fs-18">{door.price}₽</span>
                            </div>
                        </div>


                        <div className="row gutter-2">
                            <div className="col-12">
                                <div className="form-group">
                                    <label>Ширина (мм)</label>
                                    <div className="btn-group-toggle btn-group-square" data-toggle="buttons">
                                        {
                                            width !== [] && width.map((elem, index) => (
                                                <label className={elem.isActive ? "btn active" : "btn"}>
                                                    <input type="radio" name="customRadio" id={`option-${index + 1}`}/>{elem.value.trim()}
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
                                                    <input type="radio" name="customRadio" id={`option-${index + 1}`}/>{elem.value.trim()}
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
                                <a href="" className="btn btn-block btn-primary">Заказать</a>
                            </div>
                        </div>

                        {/*accordion*/}
                        <div className="row">
                            <div className="col">
                                <div className="accordion" id="accordion-1">
                                    <div className="card active">
                                        <div className="card-header" id="heading-1-1">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link" type="button" data-toggle="collapse"
                                                        data-target="#collapse-1-1" aria-expanded={`${collapse1 ? 'true' : 'false'}`}
                                                        aria-controls="collapse-1-1" onClick={openTab1}>
                                                    Характеристики
                                                </button>
                                            </h5>
                                        </div>

                                        <div id="collapse-1-1" className={`collapse ${collapse1 ? 'show' : ''}`} aria-labelledby="heading-1-1"
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
                                                        aria-expanded={`${collapse2 ? 'true' : 'false'}`} aria-controls="collapse-1-2"
                                                onClick={openTab2}>
                                                    Описание
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse-1-2" className={`collapse ${collapse2 ? 'show' : ''}`} aria-labelledby="heading-1-2"
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