import axios from "axios";

export const sendGuest = (guest) => {
    return async dispatch => {
        try {
            const response = await axios.post(`http://localhost:5000/guest`, guest)
        } catch (e) {

        }
    }
}