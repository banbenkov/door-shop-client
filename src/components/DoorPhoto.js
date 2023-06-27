import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import {FreeMode, Pagination, Navigation} from "swiper";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import LightGallery from "lightgallery/react";


const DoorPhoto = ({photo}) => {
    return (

        <Swiper
            slidesPerView={5}
            spaceBetween={10}
            freeMode={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Navigation, Pagination]}
            className="mySwiper"
        >
            {photo.length !== 0 && photo.map((elem, index) => {
                return (
                    <SwiperSlide>
                        <LightGallery plugins={[lgZoom, lgVideo]} mode="lg-fade">
                            <a data-src={'https://dveri-arsenal.ru:444/' + 'static/' + `${elem.src}`}>
                                <img
                                    src={'https://dveri-arsenal.ru:444/' + 'static/' + `${elem.src}`}
                                />
                            </a>
                        </LightGallery>
                    </SwiperSlide>
                )
            })}
        </Swiper>

    );
};

export default DoorPhoto;