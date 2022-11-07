const FETCH_FURNITURE = "FETCH_FURNITURE"
const FETCH_FURNITURE_SUCCESS = "FETCH_FURNITURE_SUCCESS"
const FETCH_FURNITURE_ERROR = "FETCH_FURNITURE_ERROR"



const defaultState = {
    furniture: [],
    loading: false,
    error: null,
}


export default function furnitureReducer(state = defaultState, action) {
    switch (action.type) {
        case FETCH_FURNITURE:
            return {
                loading: true,
                error: null,
                furniture: []
            }
        case FETCH_FURNITURE_SUCCESS:
            return {
                loading: false,
                error: null,
                furniture: action.payload
            }
        case FETCH_FURNITURE_ERROR: {
            return {
                loading: false,
                error: action.payload,
                furniture: []
            }
        }
        default:
            return state
    }
}


// export const fetchDoors = doors => ({type: FETCH_DOORS, payload: doors})
// export const fetchDoorsError = message => ({type: SET_MESSAGE, payload: message})