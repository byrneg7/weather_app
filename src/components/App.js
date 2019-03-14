import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Dashboard from './Dashboard/Dashboard';
import Footer from './Footer';

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
          <Header />
          <Route exact path='/' component={Dashboard} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
