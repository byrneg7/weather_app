import React from 'react';

import Location from './Location';

const CurrentWeather = ({ weather, location }) => {
    const description = `${weather.summary}. The temperature is ${weather.temperature} degrees C but
    it feels like ${weather.apparentTemperature}!`

    return (
        <div className="centered">
            <div className="row">
                <div className="centered">
                    <div className="card">
                        <div class="card-image">
                            <Location location={location}/>
                            <img src={require('../../images/weather.jpg')} />
                            <span className="card-title">{description}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather;

