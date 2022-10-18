const SHOW_ALERT_SUCCESS = "SHOW_ALERT_SUCCESS"
const SHOW_ALERT_ERROR = "SHOW_ALERT_ERROR"
const HIDE_ALERT = "HIDE_ALERT"



const defaultState = {
    show: false,
    status: ''
}


export default function alertReducer(state = defaultState, action) {
    switch (action.type) {
        case SHOW_ALERT_SUCCESS:
            return {
                show: true,
                status: 'success'
            }
        case SHOW_ALERT_ERROR:
            return {
                show: true,
                status: 'error'
            }
        case HIDE_ALERT:
            return {
                show: false,
                status: ''
            }
        default:
            return state
    }
}