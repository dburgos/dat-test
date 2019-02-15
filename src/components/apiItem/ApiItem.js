import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadData } from '../../redux/actions/actions'
import Emoji from '../emoji/Emoji'
import moment from 'moment'

const mapStateToProps = state => {
  return state;
};

class ApiList extends Component {

  render(state) {
    const el = this.props.item;
    const hasComment = el.comment_text && el.comment_text.length > 0;
    let content;
    if (hasComment) {
      content = <p><Emoji symbol="💬" /> {el.comment_text.substring(0, 140) + '...'} </p>;
    } else {
      content = <p><Emoji symbol="🔗" /> <a href={el.url} target='_blank' rel='noopener noreferrer'>{el.title}</a> </p>;
    }
    return (
      <tr key={el.objectID}>
        <td>{el.author}</td>
        <td>{moment(el.created_at).format('HH:mm DD/MM/YYYY')}</td>
        <td>{content}</td>
      </tr>
    )
  }
}

export default connect(mapStateToProps, { loadData })(ApiList)
