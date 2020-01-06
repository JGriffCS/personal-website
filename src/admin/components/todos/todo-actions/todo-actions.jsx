import React from 'react';

import './todo-actions.pcss';

function TodoActions() {
  return (
    <div className="todo-actions-container">
      <button
        className="btn btn-primary btn-small"
      >
        Add To-Do
      </button>
      <button
        className="btn btn-primary btn-small"
      >
        Manage Labels
      </button>
    </div>
  );
}

export default TodoActions;
