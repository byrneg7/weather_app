import { FETCH_WEATHER_CURRENTLY } from "../../actions/types";

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_WEATHER_CURRENTLY:
            return action.payload.currently
        default:
            return state;
    }
}