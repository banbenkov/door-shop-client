const SET_VIEW_DG = "SET_VIEW_DG";
const SET_VIEW_DO = "SET_VIEW_DO";
const SET_DEFAULT_VIEW = "SET_DEFAULT_VIEW";




const defaultState = {
    dg: true,
    do: true
}


export default function viewFilterReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_VIEW_DG:
            return {
                ...state,
                dg: !state.dg
            }
        case SET_VIEW_DO:
            return {
                ...state,
                do: !state.do
            }
        case SET_DEFAULT_VIEW:
            return {
                dg: true,
                do: true
            }
        default:
            return state
    }
}