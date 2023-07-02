import axios from "axios";
import {useSelector} from "react-redux";
import {toast} from "react-toastify";

export const fetchFavor = (guestId) => {
    return async dispatch => {
        try {
            dispatch({type: 'FETCH_FAVOR_DOORS'})
            const response = await axios.get(`http://localhost:5000/favor/${guestId}`)
            dispatch({type: 'FETCH_FAVOR_DOORS_SUCCESS', payload: response.data})
        } catch (e) {
            dispatch({
                type: 'FETCH_FAVOR_DOORS_ERROR',
                payload: 'Произошла ошибка при загрузки'
            })
        }
    }
}

export const sendFavor = (doorId, guestId) => {
    return async dispatch => {
        try {
            const response = await axios.post(`http://localhost:5000/favor`, {doorId, guestId});
            if (response.data !== '') {
                dispatch({type: 'ADD_FAVOR_DOORS', payload: response.data})
                toast.success('Товар добавлен в избранное', {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
            } else {
                toast.info('Товар уже добавлен в избранное', {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
            }
        } catch (e) {

        }
    }
}

export const deleteFavor = (doorId, guestId) => {
    return async dispatch => {
        try {
            const response = await axios.delete(`http://localhost:5000/favor`, {data: {doorId, guestId}})
            dispatch({type: 'DELETE_FAVOR_DOORS', payload: doorId})
        } catch (e) {

        }
    }
}