import React from 'react';
import PropTypes from 'prop-types';
import './Task.css';

function Task({
  id, title, description, done,
}) {
  return (
    <div key={id} className="Task">
      <h2>{title}</h2>
      <p>{description}</p>
      <small style={done ? { backgroundColor: 'green' } : { backgroundColor: 'rgb(119, 54, 54)' }}>{done ? 'Done' : 'In progress'}</small>
    </div>
  );
}

Task.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
};

export default React.memo(Task);
