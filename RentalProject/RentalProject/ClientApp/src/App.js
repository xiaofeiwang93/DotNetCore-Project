import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import RentalList from './components/RentalList';
import EditItem from './components/EditItem';
import Login from './components/Login';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/rental-list' component={RentalList} />
        <Route path='/edititem' component={EditItem} />
        <Route path='/login' component={Login} />
      </Layout>
    );
  }
}
