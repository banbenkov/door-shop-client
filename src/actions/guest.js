import axios from "axios";

export const sendGuest = (guest) => {
    return async dispatch => {
        try {
            const response = await axios.post(`https://dveri-arsenal.ru:444/guest`, guest)
        } catch (e) {

        }
    }
}