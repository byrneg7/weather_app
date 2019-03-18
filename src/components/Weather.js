import React from 'react';

const CurrentWeather = ({currentWeather}) => {
     const text = `Current Temperature: ${Math.round(currentWeather.temperature,0)} Deg. C`

    return (
        <div>
            <h3>{text}</h3>
        </div>
    )
}

export default CurrentWeather;

