import { FETCH_WEATHER_DAILY } from "../../actions/types";

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_WEATHER_DAILY:
            return action.payload.daily.data[0]
        default:
            return state;
    }
}