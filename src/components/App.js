import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Footer from './Footer';
import Weather from './Weather';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path='/' component={Weather} />
          <Route exact path='/' component={Footer} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
