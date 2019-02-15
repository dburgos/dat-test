import React, { Component } from 'react';
import Emoji from '../emoji/Emoji'

class ContactForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      submitted: false
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({
      submitted: true
    });
  }

  render(state) {
    const form =
      <form onSubmit={this.onSubmit}>
        <label htmlFor="name">Your name:
          <input type="text" name="name" required />
        </label>
        <label htmlFor="message">Message:
          <textarea rows="4" name="message" required></textarea>
        </label>
        <input type="submit" value="Send" />
      </form>;
    const doneMsg = <p><Emoji symbol="✅" /> Sent successfully! Thank you</p>;
    const content = this.state.submitted ? doneMsg : form;
    return (<div>{content}</div>)
  }
}

export default ContactForm
