import React, { Component } from 'react';
import Header from '../components/header/Header'
import ApiList from '../components/apiList/ApiList'

class List extends Component {
  render() {
    return (
      <div>
        <Header />
        <ApiList />
      </div>
    );
  }
}

export default List
