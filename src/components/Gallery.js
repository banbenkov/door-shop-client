import React, {useEffect} from 'react';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import {useDispatch, useSelector} from "react-redux";
import {fetchDoors} from "../actions/door";
import {fetchPicture} from "../actions/portfolio";
import Loading from "./Loading";


const Gallery = () => {
    const dispatch = useDispatch()
    const pictures = useSelector(state => state.portfolio.pictures)
    const picturesLoading = useSelector(state => state.portfolio.loading)
    useEffect(() => {
        dispatch(fetchPicture())
    }, [])

    pictures.sort((a, b) => b.doorId - a.doorId)

    return (
        <div className="container mb-2 mt-2">
            <div className="bg-white p-1">
                <h2 className="text-uppercase pl-2 pt-1">Портфолио</h2>
                {picturesLoading === true ? <Loading /> :
                    <LightGallery plugins={[lgZoom, lgVideo]} mode="lg-fade">
                        {pictures.map((item) => (
                            <a
                                className="gallery-item"
                                data-src={'https://dveri-arsenal.ru:444/' + 'static/' + item.src}
                                data-sub-html={item.html}
                            >
                                <img
                                    className="img-responsive"
                                    src={'https://dveri-arsenal.ru:444/' + 'static/' + item.src}
                                />
                            </a>
                        ))}

                    </LightGallery>
                }
            </div>
        </div>
    );
};

export default Gallery;