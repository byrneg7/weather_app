import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Dashboard from './Dashboard/Dashboard';
import Footer from './Footer';

class App extends Component {
  componentDidMount() {
    const getWeather = this.props.weather
    this.props.location().then(({payload})=> getWeather(payload));
  }
  
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path='/' component={Dashboard} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
