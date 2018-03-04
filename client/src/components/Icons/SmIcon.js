import React from 'react';
import PropTypes from 'prop-types';

const SmIcon = props => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <path fill={props.color} d={props.icon} />
  </svg>
);

SmIcon.defaultProps = {
  color: '#fff'
}

SmIcon.propTypes = {
  d: PropTypes.string.isRequired,
  color: PropTypes.string
}

export default SmIcon;