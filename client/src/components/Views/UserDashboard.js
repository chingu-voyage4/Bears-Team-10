import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../../actions/auth-action';

const UserDashboard = (props) => {
  return (
    <div style={{textAlign: 'center'}} className="route-container">
      <h1>User Dashboard</h1>

      <br/><br/>

      <button onClick={() =>
        props.onUserAuthentication(false, props.history)}
      >Log Out
        </button>
    </div>
  );
}

UserDashboard.propTypes = {
  onUserAuthentication: PropTypes.func.isRequired,
  history: PropTypes.shape.isRequired,
};

export default connect(null, actions)(UserDashboard);