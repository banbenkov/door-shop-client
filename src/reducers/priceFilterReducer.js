const SET_PRICE = "SET_PRICE";
const SET_CURR_PRICE = "SET_CURR_PRICE";
const SET_DEFAULT_PRICE = "SET_DEFAULT_PRICE";




const defaultState = {
    minPrice: 0,
    maxPrice: 0,
    currMinPrice: 0,
    currMaxPrice: 0
}


export default function priceFilterReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_PRICE:
            return {
                minPrice: action.payload.min,
                maxPrice: action.payload.max,
                currMinPrice: action.payload.min,
                currMaxPrice: action.payload.max
            }
        case SET_CURR_PRICE:
            return {
                ...state,
                currMinPrice: action.payload.min,
                currMaxPrice: action.payload.max
            }
        case SET_DEFAULT_PRICE:
            return {
                ...state,
                currMinPrice: state.minPrice,
                currMaxPrice: state.maxPrice
            }
        default:
            return state
    }
}