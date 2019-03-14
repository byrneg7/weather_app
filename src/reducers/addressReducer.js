import { FETCH_ADDRESS } from "../actions/types";

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_ADDRESS:
            return action.payload
        default:
            return state;
    }
}