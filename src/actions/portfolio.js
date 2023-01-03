import axios from "axios";
import {Dispatch} from "redux";


export const fetchPicture = () => {
    return async dispatch => {
        try {
            dispatch({type: 'FETCH_PICTURES'})
            const response = await axios.get(`http://89.223.66.133:5000/portfolio`)
            dispatch({type: 'FETCH_PICTURES_SUCCESS', payload: response.data})
        } catch (e) {
            dispatch({
                type: 'FETCH_PICTURES_ERROR',
                payload: 'Произошла ошибка при загрузки'
            })
        }
    }
}
