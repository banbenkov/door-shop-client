const INCREMENT_PAGE = "INCREMENT_PAGE";
const DECREMENT_PAGE = "DECREMENT_PAGE";
const START_PAGE = "START_PAGE";
const SET_PAGE = "SET_PAGE";

const page = 1

export default function paginateReducer(state = page, action) {
    switch (action.type) {
        case INCREMENT_PAGE:
            return action.payload + 1;
        case DECREMENT_PAGE:
            return action.payload - 1;
        case SET_PAGE:
            return action.payload;
        case START_PAGE:
            return 1;
        default:
            return state
    }
}

