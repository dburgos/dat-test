import React, { Component } from 'react';
import Header from '../components/header/Header'
import Emoji from '../components/emoji/Emoji'

class List extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Welcome!</h1>
        <p>Select a page from the menu above <Emoji symbol='👆' /></p>
      </div>
    );
  }
}

export default List
