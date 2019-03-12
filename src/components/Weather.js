import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Location from './Location'

class Weather extends Component {
    componentDidMount() {
        this.props.fetchLocation()
    }

    render() {
        return (
            <div>
                Weather Placeholder
            <Location coords={this.props.location} />
            </div>
        )
    }
}


function mapStateToProps({ location }) {
    return { location }
}

export default connect(mapStateToProps, actions)(Weather);