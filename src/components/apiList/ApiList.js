import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadData } from '../../redux/actions/actions'
import ApiItem from '../apiItem/ApiItem'
import Emoji from '../emoji/Emoji'

const mapStateToProps = state => {
  return state;
};

class ApiList extends Component {
  componentWillMount() {
    this.props.loadData()
  }

  render(state) {
    const list = this.props.list;
    return (<div>
      <h1>List</h1>
      <table>
        <thead>
          <tr>
            <th><Emoji symbol="👤" /> User</th>
            <th><Emoji symbol="🕓" /> Timestamp</th>
            <th><Emoji symbol="🔗" /> Link</th>
            <th><Emoji symbol="💬" /> Comment</th>
          </tr>
        </thead>
        <tbody>
          {
            list && list.map(el => <ApiItem item={el} />)
          }
        </tbody>
      </table>
    </div>)
  }
}

export default connect(mapStateToProps, { loadData })(ApiList)
