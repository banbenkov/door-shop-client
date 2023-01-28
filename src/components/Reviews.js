import React from 'react';
import {NavLink} from "react-router-dom";
import Slider from "react-slick";

const Reviews = () => {
    return (
        <section className="mb-2 mt-5">
            <div className="container">
                <div className="row align-items-end mb-1">
                    <div className="col-8 col-md-6">
                        <h2>Отзывы клиентов</h2>
                    </div>
                    <div className="col-4 col-md-6 text-right">
                        <a href='https://www.avito.ru/sankt-peterburg/remont_i_stroitelstvo/dveri_mezhkomnatnye_1256978277#open-reviews-list'
                           className="underlined">Посмотреть все отзывы</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card-review-big"><i className="fa fa-quote-left u-color"></i>
                            <p>Приехали в офис выбрали понравившуюся модель. Обговорили условия и комплектующие.
                                Оставил 10% предоплаты. Через 2 дня двери уже привезли. На третий день уже установили.
                                Все пожелания по фурнитуре выполнили. Качество дверей потрясающее.
                                Можно смело доверять , все что вы попросите сделают , без кучи дополнительных
                                договоров.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="user-about"><span
                                    className="font-weight-bold d-block">Алексей</span>
                                    <div className="d-flex flex-row mt-1"><i className="fa fa-star u-color"></i> <i
                                        className="fa fa-star u-color"></i> <i className="fa fa-star u-color"></i>
                                        <i className="fa fa-star u-color"></i> <i
                                            className="fa fa-star u-color"></i></div>
                                </div>
                                <div className="user-image"><img
                                    src="https://95.img.avito.st/image/1/1.WttZbLa24DJvy3Q0YUlKz63P9jjnT_Cw68_0.m9pzhJJiU_sl6zQYEdQGtaoMIAMCGuhrqfNSJzBfXEY"
                                    className="rounded-circle" width="70"/></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card-review-big"><i className="fa fa-quote-left u-color"></i>
                            <p>Спасибо за дверь. Купила дверь экошпон горизонт для ванной комнаты.
                                В компании все четко, это приятно порадовало, не подвели ни с чем, доставка в срок, установка в срок.
                                Владимир помог сделать правильный выбор, дверью я довольна, у меня нестандартный проем по высоте,
                                стандарт двери 1900 для проема мал, 2000 велик, в АрсеналСтрое мне сделали дверь 1960, она вписалась идеально.
                                Отдельное спасибо установщику Максиму, оборудование с которым он работал впечатляет,
                                виден опыт и отношение к работе!</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="user-about"><span
                                    className="font-weight-bold d-block">Ольга</span>
                                    <div className="d-flex flex-row mt-1"><i className="fa fa-star u-color"></i> <i
                                        className="fa fa-star u-color"></i> <i className="fa fa-star u-color"></i>
                                        <i className="fa fa-star u-color"></i> <i
                                            className="fa fa-star u-color"></i></div>
                                </div>
                                <div className="user-image"><img
                                    src="https://72.img.avito.st/image/1/1.6dTDXLa2Uz31-8c7nXPRngb_RTd9f0O_cf9H.1S28pynRj86axZ_9xRg80YzLZqiHu50H92jc4e4SutQ"
                                    className="rounded-circle" width="70"/></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card-review-big"><i className="fa fa-quote-left u-color"></i>
                            <p>Хочу выразить особую благодарность Владимиру. Он очень ответственный человек.
                                Профессиональный подход, прекрасная консультация. Купил красивую дверь Версаль, цвет
                                Венге.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="user-about"><span
                                    className="font-weight-bold d-block">Юсибов Анар</span>
                                    <div className="d-flex flex-row mt-1"><i className="fa fa-star u-color"></i> <i
                                        className="fa fa-star u-color"></i> <i className="fa fa-star u-color"></i>
                                        <i className="fa fa-star u-color"></i> <i
                                            className="fa fa-star u-color"></i></div>
                                </div>
                                <div className="user-image"><img
                                    src="https://98.img.avito.st/image/1/1.81QyZ7a2Sb0EwN27WCSlMqfEX7eMRFk_gMRd.mbmEAlTYng-k4pdiFbRXL9W7SBRwWeKNfCD2wZhrULI"
                                    className="rounded-circle" width="70"/></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card-review-small"><i className="fa fa-quote-left u-color"></i>
                            <p>Хочу присоединиться к большому количеству положительных отзывов и поблагодарить Владимира
                                и всю его команду!
                                Купила качественные двери по хорошей цене! Но не менее важно чуткое, внимательное
                                отношение!
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="user-about"><span
                                    className="font-weight-bold d-block">Светлана</span>
                                    <div className="d-flex flex-row mt-1"><i className="fa fa-star u-color"></i> <i
                                        className="fa fa-star u-color"></i> <i className="fa fa-star u-color"></i>
                                        <i className="fa fa-star u-color"></i> <i
                                            className="fa fa-star u-color"></i></div>
                                </div>
                                <div className="user-image"><img
                                    src="https://static.avito.ru/stub_avatars/%D0%A1/5_256x256.png"
                                    className="rounded-circle" width="70"/></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card-review-small"><i className="fa fa-quote-left u-color"></i>
                            <p>Спасибо большое вашей компании!!! Владимир- настоящий профессионал своего дела!
                                Грамотно подобрал двери, быстро в срок привезли и идеально установили! Рекомендую данную
                                фирму</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="user-about"><span
                                    className="font-weight-bold d-block">Ольга</span>
                                    <div className="d-flex flex-row mt-1"><i className="fa fa-star u-color"></i> <i
                                        className="fa fa-star u-color"></i> <i className="fa fa-star u-color"></i>
                                        <i className="fa fa-star u-color"></i> <i
                                            className="fa fa-star u-color"></i></div>
                                </div>
                                <div className="user-image"><img
                                    src="https://04.img.avito.st/image/1/1.ARopOba2u_Mfni_1JxF_YMWarfmXGqtxm5qv.EIa8AI94RgpRMX6u1dbJ4I_WDEbwZLyadR_GpK1NMbE"
                                    className="rounded-circle" width="70"/></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card-review-small"><i className="fa fa-quote-left u-color"></i>
                            <p>Огромкое спасибо за качественную, квалифицированную и оперативную работу.
                                отдельное спасибо установщику Матвею, он большой молодец.
                                Буду советовать Вас друзьям и знакомым. СПАСИБО!!!</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="user-about"><span
                                    className="font-weight-bold d-block">Яна</span>
                                    <div className="d-flex flex-row mt-1 star-blue"><i
                                        className="fa fa-star u-color"></i> <i
                                        className="fa fa-star u-color"></i> <i className="fa fa-star u-color"></i>
                                        <i className="fa fa-star u-color"></i> <i
                                            className="fa fa-star u-color"></i></div>
                                </div>
                                <div className="user-image"><img
                                    src="https://static.avito.ru/stub_avatars/%D0%AF/6_256x256.png"
                                    className="rounded-circle" width="70"/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;