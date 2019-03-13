import React from 'react';
import Weather from './Weather';
import Location from './Location';
import Timer from './Timer';

const Dashboard = () => {
    return (
        <div>
           <Weather/>
           <Location/>
           <Timer/>
        </div>
    )
}

export default Dashboard;
