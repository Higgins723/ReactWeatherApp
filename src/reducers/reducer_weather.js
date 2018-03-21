import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            // returning new instance of state with new state info added to the top of the array
            // return state.concat([action.payload.data])
            return [ action.payload.data, ...state ]
    }

    return state;
}