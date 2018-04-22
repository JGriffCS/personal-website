import React from 'react';
import PropTypes from 'prop-types';

const ResourceSite = (props) => {
  return (
    <a className="action-item" href={props.item.link}>
      <div>
        <div className="action-image-container">
          <img src={`https://logo.clearbit.com/${props.item.image_url}?s=128`} />
        </div>
        <div className="action-item-title">{props.item.name}</div>
      </div>
    </a>
  );
};

ResourceSite.propTypes = {
  item: PropTypes.shape({
    image_url: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

export default ResourceSite;

