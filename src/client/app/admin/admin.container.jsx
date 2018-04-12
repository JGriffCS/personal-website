import React from 'react';

class Admin extends React.Component {
  constructor (props, state) {
    super(props, state);

    // TODO: Obviously these need better names. Also they should come from redux or an api call
    this.state = {
      askables: [],
      learnables: [],
      practicables: [],
      watchables: [
        {iconImage: "", name: "Hulu", link: "https://www.hulu.com"},
        {iconImage: "", name: "Netflix", link: "https://www.netflix.com"},
        {iconImage: "", name: "Twitch", link: "https://www.twitch.com"},
        {iconImage: "", name: "Crunchy Roll", link: "https://www.crunchyroll.com"},
        {iconImage: "", name: "Youtube", link: "https://www.youtube.com"}
      ]
    };
  }
  render() {
    // TODO: Category component?
    // TODO: Probably don't need to cap height, so maybe a percentage or width to make a square?
    // Swap out components based on click with a breadcrumb to get back to main selections
    return (
      <div className="admin-container">
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
          <div className="category">
            <div className="title">Watch Something</div>
            <div className="visual">
              <i className="fas fa-tv"></i>
            </div>
          </div>
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
      </div>
    );
  }
}

export default Admin;