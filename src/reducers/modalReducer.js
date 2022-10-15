const SHOW_MODAL = "SHOW_MODAL"
const HIDE_MODAL = "HIDE_MODAL"



const defaultState = {
    show: false
}


export default function doorReducer(state = defaultState, action) {
    switch (action.type) {
        case SHOW_MODAL:
            return {
                show: true
            }
        case HIDE_MODAL:
            return {
                show: false
            }
        default:
            return state
    }
}

