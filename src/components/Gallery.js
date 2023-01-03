import React, {useEffect} from 'react';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import {useDispatch, useSelector} from "react-redux";
import {fetchDoors} from "../actions/door";
import {fetchPicture} from "../actions/portfolio";


const Gallery = () => {
    const dispatch = useDispatch()
    const pictures = useSelector(state => state.portfolio.pictures)
    useEffect(() => {
        dispatch(fetchPicture())
    }, [])


    return (
        <div className="container mb-2 mt-2">
            <div className="bg-white p-2">
                <h2 className="text-uppercase">Портфолио</h2>
                <LightGallery plugins={[lgZoom, lgVideo]} mode="lg-fade">
                    { pictures.map((item) => (
                    <a
                    data-lg-size="960-960"
                    data-pinterest-text={item.title}
                    data-tweet-text={item.title}
                    className="gallery-item"
                    data-src={item.src}
                    data-sub-html={item.html}
                    >
                    <img
                    className="img-responsive"
                    src={item.src}
                    />
                    </a>
                    )) }


                </LightGallery>
            </div>
        </div>
    );
};

export default Gallery;