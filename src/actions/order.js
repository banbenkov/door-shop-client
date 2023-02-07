import axios from "axios";
import {Dispatch} from "redux";


export const sendOrder = (order) => {
    return async dispatch => {
        try {
            const response = await axios.post(`https://dveri-arsenal.ru:444/order`, order)
            dispatch({type: 'SHOW_ALERT_SUCCESS'})
        } catch (e) {
            dispatch({
                type: 'SHOW_ALERT_ERROR'
            })
        }
    }
}