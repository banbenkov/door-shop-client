import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchDoor} from "../actions/door";
import InfiniteCarousel from "react-leaf-carousel";
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Modal from "./Modal";
import AdditionCat1 from "./AdditionCat1";
import AdditionCat2 from "./AdditionCat2";
import {Helmet} from "react-helmet";
import AdditionCat3 from "./AdditionCat3";
import AdditionCat4 from "./AdditionCat4";
import DoorPhoto from "./DoorPhoto";
import {fetchPicturesForDoor} from "../actions/portfolio";
import Error from "./Error";
import Loading from "./Loading";
import {useCookies} from "react-cookie";
import {fetchFavor, sendFavor} from "../actions/favor";
import {toast, ToastContainer} from 'react-toastify';



const Product = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const [cookies, setCookie] = useCookies(['userId']);
    const door = useSelector(state => state.doorDetail.door);
    const img = useSelector(state => state.doorImg.image);
    const alert = useSelector(state => state.alert);
    const showModal = useSelector(state => state.modal.show)
    let height = [];
    let width = [];
    let texture = [];
    let textureRu = [];
    const [collapse1, setCollapse1] = useState(true);
    const [collapse2, setCollapse2] = useState(false);
    const [additionalPrice, setAdditionalPrice] = useState(0);
    const [generalPrice, setGeneralPrice] = useState(0);
    const [activeWidth, setActiveWidth] = useState(0);
    const [activeHeight, setActiveHeight] = useState(0);
    const [activeTexture, setActiveTexture] = useState(0);
    const [countProduct, setCountProduct] = useState(1);
    const [delivery, setDelivery] = useState(false)
    const [order, setOrder] = useState({
        title: '',
        decor: '',
        width: '',
        height: '',
        price: 0,
        additions: '',
        phoneNumber: '',
        amount: countProduct,
        name: '',
        img: '',
        id: ''
    });
    const photoPortfolio = useSelector(state => state.portfolio.pictures);

    //Экшены для двери и фото в портфолио
    useEffect(() => {
        dispatch(fetchDoor(id))
        dispatch(fetchPicturesForDoor(id))
    }, []);

    useEffect(() => {
        setAdditionalPrice(door.price)
        setGeneralPrice(door.price)
    }, [door.price])
    useEffect(() => {
        setOrder({
            title: door.title,
            decor: textureRu[activeTexture],
            width: width[activeWidth],
            height: height[activeHeight],
            price: door.price,
            additions: '',
            amount: countProduct,
            phoneNumber: order.phoneNumber,
            name: order.name,
            img: img[activeTexture],
            idDoor: door.id
        })


    }, [door])

    //разбиение размеров и текстур
    height = door.height !== undefined ? door.height.split(";") : [];
    width = door.width !== undefined ? door.width.split(";") : [];
    texture = door.decor !== undefined ? door.decor.split(";") : [];
    textureRu = door.decorRu !== undefined ? door.decorRu.split(";") : [];
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
    texture = texture.map((elem, index) => {
        return {
            value: elem,
            isActive: index === activeTexture
        }
    })
    textureRu = textureRu.map((elem, index) => {
        return {
            value: elem,
            isActive: index === activeTexture
        }
    })


    const openTab1 = (e) => {
        setCollapse1(!collapse1);
    }

    const openTab2 = (e) => {
        setCollapse2(!collapse2);
    }

    const soldCheckbox = ({target: {checked}}, value, addition) => {
        if (checked === true) {
            if (addition !== 'Доставка по городу до парадной-1400₽') {
                setAdditionalPrice(additionalPrice + value);
                setGeneralPrice(generalPrice + value * countProduct);
            } else {
                // setAdditionalPrice(additionalPrice + value);
                setGeneralPrice(generalPrice + value);
            }

            setOrder({
                title: order.title,
                decor: order.decor,
                width: order.width,
                height: order.height,
                price: additionalPrice + value,
                additions: order.additions + addition + '\n',
                amount: countProduct,
                phoneNumber: order.phoneNumber,
                name: order.name,
                img: order.img,
                idDoor: door.id
            })
        } else {
            if (addition !== 'Доставка по городу до парадной-1400₽') {
                setAdditionalPrice(additionalPrice - value);
                setGeneralPrice(generalPrice - value * countProduct);
            } else {
                // setAdditionalPrice(additionalPrice - value);
                setGeneralPrice(generalPrice - value);
            }
            setOrder({
                title: order.title,
                decor: order.decor,
                width: order.width,
                height: order.height,
                price: additionalPrice - value,
                additions: order.additions.replace(addition + '\n', ''),
                amount: countProduct,
                phoneNumber: order.phoneNumber,
                name: order.name,
                img: order.img,
                idDoor: door.id
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

    const setHeight = (index) => {
        setActiveHeight(index);
        setOrder({
            title: order.title,
            decor: order.decor,
            width: order.width,
            height: height[index],
            price: order.price,
            additions: order.additions,
            amount: countProduct,
            phoneNumber: order.phoneNumber,
            name: order.name,
            img: order.img,
            idDoor: door.id
        })
    }

    const setWidth = (index) => {
        debugger
        setActiveWidth(index);
        setOrder({
            title: order.title,
            decor: order.decor,
            width: width[index],
            height: order.height,
            price: order.price,
            additions: order.additions,
            amount: countProduct,
            phoneNumber: order.phoneNumber,
            name: order.name,
            img: order.img,
            idDoor: door.id
        })
    }

    const setTexture = (index) => {
        setActiveTexture(index);
        setOrder({
            title: order.title,
            decor: textureRu[index],
            width: order.width,
            height: order.height,
            price: order.price,
            additions: order.additions,
            amount: countProduct,
            phoneNumber: order.phoneNumber,
            name: order.name,
            img: img[index],
            idDoor: door.id
        })
    }

    const hideAlert = () => {
        dispatch({type: "HIDE_ALERT"})
    }

    const upCount = () => {

        setCountProduct(countProduct + 1);
        setGeneralPrice(generalPrice + additionalPrice);

        setOrder({
            title: order.title,
            decor: order.decor,
            width: order.width,
            height: order.height,
            price: order.price,
            additions: order.additions,
            amount: order.amount + 1,
            phoneNumber: order.phoneNumber,
            name: order.name,
            img: order.img,
            idDoor: door.id
        })

    }

    const downCount = () => {
        if (countProduct > 1) {

            setCountProduct(countProduct - 1);
            setGeneralPrice(generalPrice - additionalPrice);

            setOrder({
                title: order.title,
                decor: order.decor,
                width: order.width,
                height: order.height,
                price: order.price,
                additions: order.additions,
                amount: order.amount - 1,
                phoneNumber: order.phoneNumber,
                name: order.name,
                img: order.img,
                idDoor: door.id
            })
        }
    }

    //Добавление в избранное
    const addFavor = () => {
        dispatch(sendFavor(door.id, cookies.userId));
    }

    return (
        <section className="hero bg-white mb-2">
            {door.id === parseInt(id) ? (
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
                        <div itemscope itemtype="http://schema.org/Product"
                             className="row gutter-2 gutter-md-4 justify-content-between">
                            {/*carousel*/}
                            <div className="col-lg-4 ml-4">
                                <Carousel infiniteLoop={true} showStatus={false} selectedItem={activeTexture}>
                                    {img.map((elem) => (
                                        <div className="card card-product">
                                            <figure className="card-image">
                                                <div onClick={() => {addFavor()}} className="action"><i className="icon-heart"></i></div>
                                                <img className="img-product" itemprop="image" src={`https://dveri-arsenal.ru:444/static/images/doors/${elem}`}/>
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
                                        <h1 itemprop="name">{door.title}</h1>
                                        <span itemProp="offers" itemScope itemType="http://schema.org/Offer">
                                    <meta itemProp="priceCurrency" content="RUB"/>
                                    <span itemprop="price" className="price fs-18">{generalPrice}₽</span>
                                    <link itemProp="availability" href="http://schema.org/InStock"/>
                                </span>
                                    </div>
                                </div>
                                {((door.category === '1' || door.category === '4' || door.category === '5') && (
                                    <AdditionCat1 door={door} soldCheckbox={soldCheckbox}/>))
                                || ((door.category === '2' || door.category === '3' || door.category === '6') && (
                                    <AdditionCat2 door={door} soldCheckbox={soldCheckbox}/>))
                                || ((door.category === '7' && (<AdditionCat3 door={door} soldCheckbox={soldCheckbox}/>)))
                                || ((door.category === '8' && (<AdditionCat4 door={door} soldCheckbox={soldCheckbox}/>)))}

                                <div className="row gutter-2">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label>Ширина (мм)</label>
                                            <div className="btn-group-toggle btn-group-square" data-toggle="buttons">
                                                {
                                                    width !== [] && width.map((elem, index) => (
                                                        <label className={elem.isActive ? "btn active" : "btn"}>
                                                            <input onChange={e => setWidth(index)} type="radio"
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
                                                            <input onChange={e => setHeight(index)} type="radio"
                                                                   name="customRadio"
                                                                   id={`option-${index + 1}`}/>{elem.value.trim()}
                                                        </label>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        {/*<label className="label-texture">Декор</label>*/}
                                        {
                                            textureRu !== [] && textureRu.map((elem, index) => (
                                                <label
                                                    className="label-texture">{elem.isActive && elem.value.trim()}</label>
                                            ))
                                        }
                                        <div className="form-group-texture">

                                            <div className="btn-group-toggle btn-group-square"
                                                 data-toggle="buttons">
                                                {
                                                    texture !== [] && texture.map((elem, index) => (
                                                        <label
                                                            className={elem.isActive ? `btn active texture-${elem.value.trim()}` : `btn texture-${elem.value.trim()}`}>
                                                            <input onChange={e => setTexture(index)} type="radio"
                                                                   name="color-select" id="option-2-1"
                                                            />

                                                        </label>
                                                    ))
                                                }
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label>Количество</label>
                                            <div className="col-3">
                                                <div className="row">
                                                    <button onClick={() => {
                                                        downCount()
                                                    }} type="button" className="btn btn-sm btn-primary col-3">-
                                                    </button>
                                                    <input value={countProduct}
                                                           className="form-control form-control-sm col-4" type="text"/>
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

                                {/*accordion*/}
                                <div className="row">
                                    <div className="col">
                                        <div className="accordion" id="accordion-1">
                                            <div className="card active">
                                                <div className="card-header" id="heading-1-1">
                                                    <h5 className="mb-0">
                                                        <button className="btn btn-link" type="button"
                                                                data-toggle="collapse"
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
                                                    <div itemprop="description" className="card-body">
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
                                                        <p itemprop="description">{`${door.description}`}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row" hidden={photoPortfolio.length === 0}>
                            <h2>Фото двери</h2>
                            <DoorPhoto photo={photoPortfolio}/>
                        </div>
                    </div>)
                : <Loading/>
            }

        </section>
    );
};

export default Product;