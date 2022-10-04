import axios from "axios";
import {Dispatch} from "redux";


export const fetchDoors = () => {
    return async dispatch => {
        try {
            dispatch({type: 'FETCH_DOORS'})
            const response = await axios.get(`http://localhost:5000/door`)
            dispatch({type: 'FETCH_DOORS_SUCCESS', payload: response.data})
        } catch (e) {
            dispatch({
                type: 'FETCH_DOORS_ERROR',
                payload: 'Произошла ошибка при загрузки'
            })
        }
    }
}

export const fetchDoor = (id) => {
    return async dispatch => {
        try {
            dispatch({type: 'FETCH_DOOR_DETAIL'})
            dispatch({type: 'FETCH_DOOR_IMAGE'})
            const response = await axios.get(`http://localhost:5000/door/${id}`)
            const imgArr = response.data.img.split(';')
            const img = imgArr.map((elem) => {
                const elemRet = elem.trim();
                if (elemRet !== '') {
                    return elemRet;
                }
            })
            img.pop();
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