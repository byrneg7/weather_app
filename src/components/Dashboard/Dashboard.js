import React, { Component } from 'react';
import { connect } from 'react-redux';

import CurrentWeather from './Weather';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <CurrentWeather
                    weather={this.props.currentWeather}
                    location={this.props.address}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(Dashboard);