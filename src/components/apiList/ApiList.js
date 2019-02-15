import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadData } from '../../redux/actions/actions'
import ApiItem from '../apiItem/ApiItem'
import Emoji from '../emoji/Emoji'
import './ApiList.css';

const mapStateToProps = state => {
  return state;
};

class ApiList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 0
    };
    this.changePage = this.changePage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }

  componentWillMount() {
    this.props.loadData(this.state.page);
  }

  changePage(delta) {
    this.setState({
      page: this.state.page + delta
    });
    this.props.loadData(this.state.page);
  }

  prevPage() {
    this.changePage(-1);
  }

  nextPage() {
    this.changePage(1);
  }

  render(state) {
    const list = this.props.list;
    const showPrevBtn = this.state.page > 0;
    const prevPageBtn = <button id="prevPage" className="page-selector" onClick={this.prevPage}><Emoji symbol="⏪" /></button>;
    const nextPageBtn = <button id="nextPage" className="page-selector" onClick={this.nextPage}><Emoji symbol="⏩" /></button>;
    const pagination = <h4>Page {this.state.page + 1} {showPrevBtn ? prevPageBtn : null} {nextPageBtn}</h4>;
    return (<div>
      <h1>List</h1>
      {pagination}
      <table>
        <thead>
          <tr>
            <th><Emoji symbol="👤" /> User</th>
            <th><Emoji symbol="🕓" /> Timestamp</th>
            <th><Emoji symbol="📦" /> Content</th>
          </tr>
        </thead>
        <tbody>
          {
            list && list.map((el, index) => <ApiItem item={el} key={index} />)
          }
        </tbody>
      </table>
    </div>)
  }
}

export default connect(mapStateToProps, { loadData })(ApiList)
