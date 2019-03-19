import React from 'react';
import SimpleSlider from './Slider';

const CurrentWeather = ({currentWeather, weeklyWeather, slider}) => {
    
    function renderContent () {
        if (slider === 0){
            return `Current Weather Summary: ${currentWeather.summary}`
        } else {
            const daySummary = weeklyWeather[slider].summary
            return `The Summary for day ${slider}: ${daySummary} `
        }
    }
    return (
        <div>
            <h3>{renderContent()}</h3>
            <SimpleSlider/>
        </div>
    )
}

export default CurrentWeather;

