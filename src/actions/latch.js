import axios from "axios";
import {Dispatch} from "redux";


export const fetchLatches = () => {
    return async dispatch => {
        try {
            dispatch({type: 'FETCH_FURNITURE'})
            const response = await axios.get(`http://89.223.66.133:5000/latch`)
            dispatch({type: 'FETCH_FURNITURE_SUCCESS', payload: response.data})
        } catch (e) {
            dispatch({
                type: 'FETCH_FURNITURE_ERROR',
                payload: 'Произошла ошибка при загрузки'
            })
        }
    }
}

export const fetchLatch = (id) => {
    return async dispatch => {
        try {
            dispatch({type: 'FETCH_FURNITURE_DETAIL'})
            const response = await axios.get(`http://89.223.66.133:5000/latch/${id}`)
            dispatch({type: 'FETCH_FURNITURE_DETAIL_SUCCESS', payload: response.data})
        } catch (e) {
            dispatch({
                type: 'FETCH_FURNITURE_DETAIL_ERROR',
                payload: 'Произошла ошибка при загрузки'
            })
        }
    }
}