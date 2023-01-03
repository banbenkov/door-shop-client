const FETCH_PICTURES = "FETCH_PICTURES"
const FETCH_PICTURES_SUCCESS = "FETCH_PICTURES_SUCCESS"
const FETCH_PICTURES_ERROR = "FETCH_PICTURES_ERROR"



const defaultState = {
    pictures: [],
    loading: false,
    error: null,
}


export default function portfolioReducer(state = defaultState, action) {
    switch (action.type) {
        case FETCH_PICTURES:
            return {
                loading: true,
                error: null,
                pictures: []
            }
        case FETCH_PICTURES_SUCCESS:
            return {
                loading: false,
                error: null,
                pictures: action.payload
            }
        case FETCH_PICTURES_ERROR: {
            return {
                loading: false,
                error: action.payload,
                pictures: []
            }
        }
        default:
            return state
    }
}

