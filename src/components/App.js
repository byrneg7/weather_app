import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Weather from './Weather';
import SideNav from './SideNav';
import About from './modals/About';
import Contact from './modals/Contact';

class App extends Component {
  componentDidMount() {
    const getWeather = this.props.weather;
    const getAddress = this.props.address;
    this.props.location().then(({ payload }) => {
      getWeather(payload);
      getAddress(payload);
    });
  }
  render() {
    return (
      <BrowserRouter>
        <div className="container">

          <Route
            exact path='/'
            render={() => <Weather {...this.props} />}
          />
          <SideNav />
          <About />
          <Contact />
        </div>
      </BrowserRouter>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, actions)(App);
