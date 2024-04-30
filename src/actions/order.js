import axios from "axios";
import {Dispatch} from "redux";
import {toast} from "react-toastify";


export const sendOrder = (order) => {
    return async dispatch => {
        try {
            const response = await axios.post(`https://dveri-arsenal.ru:444/order`, order)
            // dispatch({type: 'SHOW_ALERT_SUCCESS'})
            toast.success('Заказ получен! Оператор перезвонит в ближайшее время.', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: false
            });
        } catch (e) {
            debugger;
            toast.error('При создание заказа возникли ошибки.', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: false
            });
        }
    }
}