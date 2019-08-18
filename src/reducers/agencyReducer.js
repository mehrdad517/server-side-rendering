import {
    FETCH_AGENCY
} from "../actionTypes";

const initialstate = {
    agency: [],
    loading: false
};

function reducer(state= initialstate, action) {
    switch (action.type) {
        case FETCH_AGENCY:
            return {
                ...state,
                loading: true,
                agency: action.payload
            };
        default:
            return state;

    }
}

export default reducer;