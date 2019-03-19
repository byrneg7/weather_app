import React from 'react';
import SimpleSlider from './Slider';

const CurrentWeather = ({currentWeather, weeklyWeather, sliderValue}) => {
    
    function renderContent () {
        if (sliderValue === 0){
            return `Current Weather Summary: ${currentWeather.summary}`
        } else {
            // const daySummary = weeklyWeather[sliderValue].summary
            // return `The Summary for day ${sliderValue}: ${daySummary} `
        }
    }

    return (
        <div>
            {/* <h3>{renderContent()}</h3> */}
            <SimpleSlider/>
        </div>
    )
}

export default CurrentWeather;

