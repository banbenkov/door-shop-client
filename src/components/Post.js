import React from 'react';
import styles from '../css/style.css'
import {Swiper, SwiperSlide} from "swiper/react";
import LightGallery from "lightgallery/react";


const Post = () => {
    return (
        <div className="container mt-5 mb-5">
            <div className="row justify-content-center gutter-1">
                <div className="col-lg-8">
                    <div className="bg-white p-4">
                        <h2 className="text-uppercase">О нас</h2>
                        <p>Компания ООО "АрсеналСтрой" с 2008 г. производит

                            межкомнатные двери "Арсенал" и имеет

                            безупречную репутацию.

                            ООО "АрсеналСтрой" располагается на территории завода

                            "ЛЭМЗ" по Петергофскому шоссе д.73 ( Юго-Запад Санкт-

                            Петербурга). </p>
                        <p>Производственные цеха нашего предприятия

                            оснащены высоко производительным, современным

                            оборудованием, позволяющим выпускать более пяти тысяч

                            (5000 шт.) дверей в месяц. Мы постоянно совершенствуем

                            наши технологии, что позволяет пополнять ассортимент

                            нашей продукции новыми моделями. Нам удалось создать

                            систему контроля качества, которая позволяет нам быть

                            уверенными в надежности выпускаемой нами продукции.

                            На сегодняшний день межкомнатные двери под торговой

                            маркой "Арсенал" представлены как в Северо-Западном

                            округе, так и в средней полосе России.</p>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="bg-white">
                        <div className="row">
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={10}
                                freeMode={true}
                                pagination={{
                                    clickable: false,
                                }}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <LightGallery mode="lg-fade">
                                        <a data-src="images/demo/ser3.jpg">
                                            <img
                                                src="images/demo/ser3.jpg" alt="Сертификат соответствия"
                                            />
                                        </a>
                                    </LightGallery>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <LightGallery mode="lg-fade">
                                        <a data-src="images/demo/ser1.jpg">
                                            <img
                                                src="images/demo/ser1.jpg" alt="Сертификат соответствия"
                                            />
                                        </a>
                                    </LightGallery>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <LightGallery mode="lg-fade">
                                        <a data-src="images/demo/ser2.jpg">
                                            <img
                                                src="images/demo/ser2.jpg" alt="Сертификат соответствия"
                                            />
                                        </a>
                                    </LightGallery>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;