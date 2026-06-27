import axios from "axios";
import {Dispatch} from "redux";


export const fetchDoorhandles = () => {
    return async dispatch => {
        try {
            dispatch({type: 'FETCH_FURNITURE'})
            const response = await axios.get(`https://191.44.38.17:444/doorhandle`)
            dispatch({type: 'FETCH_FURNITURE_SUCCESS', payload: response.data})
        } catch (e) {
            dispatch({
                type: 'FETCH_FURNITURE_ERROR',
                payload: 'Произошла ошибка при загрузки'
            })
        }
    }
}

export const fetchDoorhandle = (id) => {
    return async dispatch => {
        try {
            dispatch({type: 'FETCH_FURNITURE_DETAIL'})
            const response = await axios.get(`https://191.44.38.17.ru:444/doorhandle/${id}`)
            dispatch({type: 'FETCH_FURNITURE_DETAIL_SUCCESS', payload: response.data})
        } catch (e) {
            dispatch({
                type: 'FETCH_FURNITURE_DETAIL_ERROR',
                payload: 'Произошла ошибка при загрузки'
            })
        }
    }
}
