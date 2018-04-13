import React from 'react';
import { Link } from 'react-router-dom';

class AdminDashboard extends React.Component {
  constructor (props) {
    super(props);

    // TODO: Obviously these need better names. Also they should come from redux or an api call
    this.state = {

    };
  }

  render () {
    return (
      <React.Fragment>
        <h1>State your purpose!</h1>
        <div className="category-options">
          <div className="category">
            <div className="title">Ask Something</div>
            <div className="visual">
              <i className="fas fa-comment-dots"></i>
            </div>
          </div>
          <div className="category">
            <div className="title">Learn Something</div>
            <div className="visual">
              <i className="fas fa-book"></i>
            </div>
          </div>
          <div className="category">
            <div className="title">Practice Something</div>
            <div className="visual">
              <i className="fas fa-keyboard"></i>
            </div>
          </div>
          <Link to={`${this.props.match.url}/watch`}>
            <div className="category">
              <div className="title">Watch Something</div>
              <div className="visual">
                <i className="fas fa-tv"></i>
              </div>
            </div>
          </Link>
          <div className="category">
            <div className="title">Manage Blog</div>
            <div className="visual">
              <i className="fas fa-rss"></i>
            </div>
          </div>
          <div className="category">
            <div className="title">News</div>
            <div className="visual">
              <i className="fas fa-newspaper"></i>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default AdminDashboard;