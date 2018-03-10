import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LogInForm from '../Elements/LogInForm';
import RegisterForm from '../Elements/RegisterForm';

class AuthPage extends Component {
  renderForm() {
    if(this.props.method === 'Register') {
      return <RegisterForm />
    }
    
    return <LogInForm />
  }

  render() {
    return (
      <div>
        {this.renderForm()}
      </div>
    );
  }
}

AuthPage.propTypes = {
  method: PropTypes.string.isRequired
};

export default AuthPage;