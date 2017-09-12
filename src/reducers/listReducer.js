import { GET_LIST } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case GET_LIST:
            //promise will dispatch the original value and send it to reducer
            return action.payload.data;

        default:
            return state;
    }
}