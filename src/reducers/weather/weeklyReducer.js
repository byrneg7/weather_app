import { FETCH_WEATHER_WEEKLY } from "../../actions/types";

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_WEATHER_WEEKLY:
            return action.payload.daily.data
        default:
            return state;
    }
}