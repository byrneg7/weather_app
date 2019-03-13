import { FETCH_LOCATION } from './types';
import { FETCH_WEATHER } from './types';
import { keys } from '../keys'
import axios from 'axios';

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
                dispatch(action)
                resolve(action);
            }, () => {
                reject(new Error('Permission denied'));
            });
        });
    }
};


export const weather = ({ lat, long }) => async dispatch => {
    const url = `/forecast/${keys.darkSky}/${lat},${long}?units=si&exclude=minutely,flags`
    const res = await axios.get(url)
    dispatch({ type: FETCH_WEATHER, payload: res.data.currently })
};
