import axios from 'axios';

import { FETCH_LOCATION } from './types';
import { FETCH_WEATHER_CURRENTLY } from './types';
import { FETCH_WEATHER_HOURLY } from './types';
import { FETCH_WEATHER_DAILY} from './types';
import { FETCH_WEATHER_WEEKLY } from './types';
import { FETCH_ADDRESS } from './types';
const keys = require('./../keys');

export const location = () => {
    return function (dispatch) {
        return new Promise((resolve, reject) => {
            if (!navigator.geolocation) {
                reject(new Error('Not Supported'));
            }
            navigator.geolocation.getCurrentPosition((position) => {
                var action = {
                    type: FETCH_LOCATION,
                    payload: {
                        lat: position.coords.latitude,
                        long: position.coords.longitude,
                        time: position.timestamp
                    }
                }
                resolve(action);
            }, () => {
                reject(new Error('Permission denied'));
            });
        });
    }
};

export const address = ({ lat, long }) => async dispatch => {
    const url = `https://us1.locationiq.com/v1/reverse.php?key=${keys.myLocationIq}&lat=${lat}&lon=${long}&format=json`;
    const res = await axios.get(url);
    dispatch({ type: FETCH_ADDRESS, payload: res.data.address })
}

export const weather = ({ lat, long }) => async dispatch => {
    const url = `/forecast/${keys.darkSky}/${lat},${long}?units=auto&exclude=minutely,flags`
    const res = await axios.get(url);

    const currentlyAction = {
        type: FETCH_WEATHER_CURRENTLY,
        payload: res.data,
    };
    const hourlyAction = {
        type: FETCH_WEATHER_HOURLY,
        payload: res.data,
    };
    const dailyAction = {
        type: FETCH_WEATHER_DAILY,
        payload: res.data,
    };
    const weeklyAction = {
        type: FETCH_WEATHER_WEEKLY,
        payload: res.data,
    };

    dispatch(currentlyAction)
    dispatch(hourlyAction)
    dispatch(dailyAction)
    dispatch(weeklyAction)
};
