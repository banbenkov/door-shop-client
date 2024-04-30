import axios from "axios";
import {priceFormatter} from "../utils/formatter";

export const fetchDoors = () => {
    let min = 0;
    let max = 0;
    return async dispatch => {
        try {
            dispatch({type: 'FETCH_DOORS'})
            const response = await axios.get(`https://dveri-arsenal.ru:444/door`)
            response.data.forEach(elem => {
                if (min > priceFormatter(elem.price,0)|| min === 0) {
                    min = priceFormatter(elem.price,0);
                }
                if (max < priceFormatter(elem.price, 0)) {
                    max = priceFormatter(elem.price, 0);
                }
            })
            const priceFilter = {min, max};
            dispatch({type: 'FETCH_DOORS_SUCCESS', payload: response.data});
            dispatch({type: 'SET_PRICE', payload: priceFilter});
        } catch (e) {
            dispatch({
                type: 'FETCH_DOORS_ERROR',
                payload: 'Произошла ошибка при загрузки'
            });
        }
    }
}

export const fetchDoor = (id) => {
    return async dispatch => {
        let imgArr;
        let img = [];
        try {
            dispatch({type: 'FETCH_DOOR_DETAIL'})
            dispatch({type: 'FETCH_DOOR_IMAGE'})
            const response = await axios.get(`https://dveri-arsenal.ru:444/door/${id}`)
            if (response.data.img.indexOf(';') !== -1) {
                imgArr = response.data.img.split(';')
                img = imgArr.map((elem) => {
                    const elemRet = elem.trim();
                    if (elemRet !== '') {
                        return elemRet;
                    }
                })
            } else {
                img[0] = response.data.img;
            }


            dispatch({type: 'FETCH_DOOR_DETAIL_SUCCESS', payload: response.data})
            dispatch({type: 'FETCH_DOOR_IMAGE_SUCCESS', payload: img})
        } catch (e) {
            dispatch({
                type: 'FETCH_DOOR_DETAIL_ERROR',
                payload: 'Произошла ошибка при загрузки'
            })
            dispatch({
                type: 'FETCH_DOOR_IMAGE_ERROR',
                payload: 'Произошла ошибка при загрузки'
            })
        }
    }
}
