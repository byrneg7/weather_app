import { FETCH_WEATHER_HOURLY } from "../../actions/types";

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_WEATHER_HOURLY:
            return action.payload.hourly.data
        default:
            return state;
    }
}