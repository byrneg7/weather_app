import axios from 'axios';

import { FETCH_LOCATION } from './types';
import { FETCH_WEATHER_CURRENTLY } from './types';
// import { FETCH_WEATHER_HOURLY } from './types';
import { FETCH_WEATHER_DAILY } from './types';
import { FETCH_WEATHER_WEEKLY } from './types';
import { FETCH_ADDRESS } from './types';
import { ABOUT_MODAL, CONTACT_MODAL, CLOSE_MODAL } from './types';
import {SLIDER_VALUE} from './types';

import {store} from './../index';

const keys = require('./../config/keys');

export const location = () => {
    return function () {
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
    const url = `/forecast/${keys.darkSky}/${lat},${long}?units=auto&exclude=minutely,hourly,flags`
    const res = await axios.get(url);
    const currentlyAction = {
        type: FETCH_WEATHER_CURRENTLY,
        payload: res.data,
    };
    // const hourlyAction = {
    //     type: FETCH_WEATHER_HOURLY,
    //     payload: res.data,
    // };
    const dailyAction = {
        type: FETCH_WEATHER_DAILY,
        payload: res.data,
    };
    const weeklyAction = {
        type: FETCH_WEATHER_WEEKLY,
        payload: res.data,
    };

    dispatch(currentlyAction)
    // dispatch(hourlyAction)
    dispatch(dailyAction)
    dispatch(weeklyAction)
};


//this action creator makes the about popup appear
export const about_switch = () => {
    store.dispatch ({
        type: ABOUT_MODAL,
        payload: true
    })
}
export const contact_switch = () => {
    store.dispatch ({
        type: CONTACT_MODAL,
        payload: true
    })
}

export const off_switch = () => {
    store.dispatch ({
        type: CLOSE_MODAL,
        payload:false
    })
}

export const slider_value = (value) => {
    store.dispatch({
        type: SLIDER_VALUE,
        payload: value
    })
}