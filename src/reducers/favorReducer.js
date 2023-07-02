const FETCH_FAVOR_DOORS = "FETCH_FAVOR_DOORS";
const FETCH_FAVOR_DOORS_SUCCESS = "FETCH_FAVOR_DOORS_SUCCESS";
const FETCH_FAVOR_DOORS_ERROR = "FETCH_FAVOR_DOORS_ERROR";
const ADD_FAVOR_DOORS = "ADD_FAVOR_DOORS";
const DELETE_FAVOR_DOORS = "DELETE_FAVOR_DOORS";

const defaultState = {
    doors: [],
    loading: false,
    error: null,
}


export default function favorReducer(state = defaultState, action) {
    switch (action.type) {
        case FETCH_FAVOR_DOORS:
            return {
                loading: true,
                error: null,
                doors: []
            }
        case FETCH_FAVOR_DOORS_SUCCESS:
            return {
                loading: false,
                error: null,
                doors: action.payload
            }
        case FETCH_FAVOR_DOORS_ERROR: {
            return {
                loading: false,
                error: action.payload,
                doors: []
            }
        }
        case ADD_FAVOR_DOORS: {
            return {
                loading: false,
                error: null,
                doors: [...state.doors, action.payload]
            }
        }

        case DELETE_FAVOR_DOORS: {
            return {
                loading: false,
                error: null,
                doors: state.doors.filter((elem) => elem.id !== action.payload)
            }
        }
        default:
            return state
    }
}

