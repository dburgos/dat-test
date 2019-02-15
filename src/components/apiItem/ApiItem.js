import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadData } from '../../redux/actions/actions'
import moment from 'moment'

const mapStateToProps = state => {
  return state;
};

class ApiList extends Component {

  render(state) {
    const el = this.props.item;
    const hasComment = el.comment_text && el.comment_text.length > 0;
    let comment;
    if (hasComment) {
      comment = el.comment_text.substring(0, 140) + '...';
    }
    return (
      <tr key={el.story_id}>
        <td>{el.author}</td>
        <td>{moment(el.created_at).format('HH:mm DD/MM/YYYY')}</td>
        <td><a href={el.url} target='_blank' rel='noopener noreferrer'>{el.title}</a></td>
        <td>{comment}</td>
      </tr>
    )
  }
}

export default connect(mapStateToProps, { loadData })(ApiList)
