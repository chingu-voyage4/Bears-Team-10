import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../../actions/auth-action';

class TokenConfig extends Component {
  constructor(props) {
    super(props);

    if (this.props.location.search != '') {
      const token = this.props.location.search.replace('?token=', '');
      localStorage.setItem('AUTH_TOKEN', token);
      this.props.onUserAuthentication(true, this.props.history);
    }
  }

  render() {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
}

TokenConfig.propTypes = {
  location: PropTypes.shape.isRequired,
  history: PropTypes.shape.isRequired,
  onUserAuthentication: PropTypes.func.isRequired,
};

export default connect(null, actions)(TokenConfig);