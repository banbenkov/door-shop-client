const FETCH_DOOR_DETAIL = "FETCH_DOOR_DETAIL"
const FETCH_DOOR_DETAIL_SUCCESS = "FETCH_DOOR_DETAIL_SUCCESS"
const FETCH_DOOR_DETAIL_ERROR = "FETCH_DOOR_DETAIL_ERROR"



const defaultState = {
    door: {},
    loading: false,
    error: null
}


export default function doorDetailReducer(state = defaultState, action) {
    switch (action.type) {
        case FETCH_DOOR_DETAIL:
            return {
                loading: true,
                error: null,
                door: {},
            }
        case FETCH_DOOR_DETAIL_SUCCESS:
            return {
                loading: false,
                error: null,
                door: action.payload
            }
        case FETCH_DOOR_DETAIL_ERROR: {
            return {
                loading: false,
                error: action.payload,
                door: {}
            }
        }
        default:
            return state
    }
}


// export const fetchDoors = doors => ({type: FETCH_DOORS, payload: doors})
// export const fetchDoorsError = message => ({type: SET_MESSAGE, payload: message})