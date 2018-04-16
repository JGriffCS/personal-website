import React from 'react';

import AdminCategory from '../shared/admin-category/admin-category.component';

class AdminDashboard extends React.Component {
  constructor (props) {
    super(props);

    // TODO: Obviously these need better names. Also they should come from redux or an api call
    this.state = {
      categories: [
        { id: 1, path: '/ask', title: 'Ask Something', icon: 'fa-comment-dots' },
        { id: 2, path: '/learn', title: 'Learn Something', icon: 'fa-book' },
        { id: 3, path: '/practice', title: 'Practice Something', icon: 'fa-keyboard' },
        { id: 4, path: '/watch', title: 'Watch Something', icon: 'fa-tv' },
        { id: 5, path: '/blog', title: 'Manage Blog', icon: 'fa-rss' },
        { id: 6, path: '/news', title: 'News', icon: 'fa-newspaper' },
      ]
    };
  }

  render () {
    return (
      <React.Fragment>
        <div className="category-options">
          {
            this.state.categories.map((category) => {
              return (
                <AdminCategory key={category.id} category={category} match={this.props.match} />
              )
            })
          }
        </div>
      </React.Fragment>
    )
  }
}

export default AdminDashboard;