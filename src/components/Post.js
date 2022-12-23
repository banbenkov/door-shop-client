import React from 'react';
import styles from '../css/style.css'

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
                            <div className="col-4">
                                <div className="card-image">
                                    <img src="images/demo/ser1.jpg" alt="Image" />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card-image">
                                    <img src="images/demo/ser2.jpg" alt="Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Post;