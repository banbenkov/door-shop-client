const FETCH_DOOR_IMAGE = "FETCH_DOOR_IMAGE"
const FETCH_DOOR_IMAGE_SUCCESS = "FETCH_DOOR_IMAGE_SUCCESS"
const FETCH_DOOR_IMAGE_ERROR = "FETCH_DOOR_IMAGE_ERROR"



const defaultState = {
    image: [],
    loading: false,
    error: null
}


export default function doorImageReducer(state = defaultState, action) {
    switch (action.type) {
        case FETCH_DOOR_IMAGE:
            return {
                loading: true,
                error: null,
                image: [],
            }
        case FETCH_DOOR_IMAGE_SUCCESS:
            return {
                loading: false,
                error: null,
                image: action.payload
            }
        case FETCH_DOOR_IMAGE_ERROR: {
            return {
                loading: false,
                error: action.payload,
                image: []
            }
        }
        default:
            return state
    }
}