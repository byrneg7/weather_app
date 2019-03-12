import { FETCH_LOCATION } from './types';

export const fetchLocation = () => async dispatch => {
    const res = { type: FETCH_LOCATION, payload: { lat: 53, long: -6.2 } }
    dispatch(res);
}