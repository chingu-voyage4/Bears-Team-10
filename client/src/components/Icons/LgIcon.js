import React from 'react';
import PropTypes from 'prop-types';

const LgIcon = props => (
  <svg width="100" height="100" viewBox="0 0 24 24">
    <path fill={props.color} d={props.icon} />
  </svg>
);

LgIcon.defaultProps = {
  color: '#fff'
}

LgIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string
}

export default LgIcon;