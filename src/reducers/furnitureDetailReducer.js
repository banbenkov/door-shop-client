const FETCH_FURNITURE_DETAIL = "FETCH_FURNITURE_DETAIL"
const FETCH_FURNITURE_DETAIL_SUCCESS = "FETCH_FURNITURE_DETAIL_SUCCESS"
const FETCH_FURNITURE_DETAIL_ERROR = "FETCH_FURNITURE_DETAIL_ERROR"



const defaultState = {
    furniture: {},
    loading: false,
    error: null
}


export default function furnitureDetailReducer(state = defaultState, action) {
    switch (action.type) {
        case FETCH_FURNITURE_DETAIL:
            return {
                loading: true,
                error: null,
                furniture: {},
            }
        case FETCH_FURNITURE_DETAIL_SUCCESS:
            return {
                loading: false,
                error: null,
                furniture: action.payload
            }
        case FETCH_FURNITURE_DETAIL_ERROR: {
            return {
                loading: false,
                error: action.payload,
                furniture: {}
            }
        }
        default:
            return state
    }
}
