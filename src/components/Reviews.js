import React from 'react';
import {NavLink} from "react-router-dom";
import Slider from "react-slick";
import YandexReviewsWidget from "./YandexReviewsWidget";

const Reviews = () => {
    return (
        <section className="mb-2 mt-5">
            <div className="container">
                <div className="row align-items-end mb-1">
                    <div className="col-8 col-md-6">
                        <h2>Отзывы клиентов</h2>
                    </div>
                    <div className="col-4 col-md-6 text-right">
                        {/*<a href='https://www.avito.ru/sankt-peterburg/remont_i_stroitelstvo/dveri_mezhkomnatnye_1256978277#open-reviews-list'*/}
                        {/*   className="underlined">Посмотреть все отзывы</a>*/}
                    </div>
                </div>
                <div className="row">
                    <YandexReviewsWidget />
                </div>
            </div>
        </section>
    );
};

export default Reviews;