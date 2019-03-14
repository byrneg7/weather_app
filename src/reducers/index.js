import { combineReducers } from 'redux';

import addressReducer from './addressReducer';
import currentlyReducer from './weather/currentlyReducer';
import hourlyReducer from './weather/hourlyReducer';
import dailyReducer from './weather/dailyReducer';
import weeklyReducer from './weather/weeklyReducer';

export default combineReducers({
    currentWeather: currentlyReducer,
    hourlyWeather: hourlyReducer,
    dailyWeather: dailyReducer,
    weeklyWeather: weeklyReducer,
    address: addressReducer
});