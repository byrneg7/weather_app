import { SLIDER_VALUE } from "../actions/types";

export default function (state = 0, action) {
    switch (action.type) {
        case SLIDER_VALUE:
            return action.payload
        default:
            return state;
    }
}