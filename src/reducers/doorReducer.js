const FETCH_DOORS = "FETCH_DOORS"
const FETCH_DOORS_SUCCESS = "FETCH_DOORS_SUCCESS"
const FETCH_DOORS_ERROR = "FETCH_DOORS_ERROR"



const defaultState = {
    doors: [],
    loading: false,
    error: null,
    page: 1,
    totalCount: 0,
    limit: 6
}


export default function doorReducer(state = defaultState, action) {
    switch (action.type) {
        case FETCH_DOORS:
            return {
                loading: true,
                error: null,
                doors: []
            }
        case FETCH_DOORS_SUCCESS:
            return {
                loading: false,
                error: null,
                doors: action.payload
            }
        case FETCH_DOORS_ERROR: {
            return {
                loading: false,
                error: action.payload,
                doors: []
            }
        }
        default:
            return state
    }
}


// export const fetchDoors = doors => ({type: FETCH_DOORS, payload: doors})
// export const fetchDoorsError = message => ({type: SET_MESSAGE, payload: message})