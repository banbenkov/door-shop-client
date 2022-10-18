import axios from "axios";
import {Dispatch} from "redux";


export const sendOrder = (order) => {
    return async dispatch => {
        try {
            const response = await axios.post(`http://localhost:5000/order`, order)
            dispatch({type: 'SHOW_ALERT_SUCCESS'})
        } catch (e) {
            dispatch({
                type: 'SHOW_ALERT_ERROR'
            })
        }
    }
}