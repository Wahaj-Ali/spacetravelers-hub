import React from 'react';
import PropTypes from 'prop-types';
import './singleRocket.css';

const SingleRocket = (props) => {
  const {
    name, description, img,
  } = props;
  return (
    <div className="rocket-section">
      <div className="rocket-info">
        <img className="rocket-image" src={img} alt="rocket" />
        <div className="rocket-detail">
          <h2 className="rocket-name">{name}</h2>
          <p className="rocket-summary">{description}</p>
          <button type="button" className="reserve-rocket">Reserve Rocket</button>
        </div>
      </div>
    </div>
  );
};

SingleRocket.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
}.isRequired;

export default SingleRocket;
