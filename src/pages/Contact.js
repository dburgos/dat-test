import React, { Component } from 'react';
import Header from '../components/header/Header'
import ContactForm from '../components/contactForm/ContactForm'

class Contact extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Contact</h1>
        <ContactForm />
      </div>
    );
  }
}

export default Contact
