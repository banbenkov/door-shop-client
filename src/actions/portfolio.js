import axios from "axios";
import {Dispatch} from "redux";


export const fetchPicture = () => {
    return async dispatch => {
        try {
            dispatch({type: 'FETCH_PICTURES'})
            const response = await axios.get(`https://dveri-arsenal.ru:444/portfolio`)
            dispatch({type: 'FETCH_PICTURES_SUCCESS', payload: response.data})
        } catch (e) {
            dispatch({
                type: 'FETCH_PICTURES_ERROR',
                payload: 'Произошла ошибка при загрузки'
            })
        }
    }
}

export const fetchPicturesForDoor = (doorId) => {
    return async dispatch => {
        try {
            dispatch({type: 'FETCH_PICTURES'})
            const response = await axios.get(`https://dveri-arsenal.ru:444/portfolio/${doorId}`)
            dispatch({type: 'FETCH_PICTURES_SUCCESS', payload: response.data})
        } catch (e) {
            dispatch({
                type: 'FETCH_PICTURES_ERROR',
                payload: 'Произошла ошибка при загрузки'
            })
        }
    }
}
