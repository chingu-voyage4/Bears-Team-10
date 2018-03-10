import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SmIcon from '../Icons/SmIcon';
import { PERSON_PLUS_ICON } from '../Icons/IconList';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstName: '',
        lastName: '',
        userName: '',
        password: '',
        email: ''
      },
      submitted: false
    };
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
      });
    }

    handleSubmit(event) {
      event.preventDefault();

      this.setState({ submitted: true });
      const { user } = this.state;
      const { dispatch } = this.props;

      /*if (user.firstName && user.lastName && user.username && user.password) {
          dispatch(userActions.register(user));
      }*/
    }

  render() {
    const { registering  } = this.props;
    const { user, submitted } = this.state;
    return (
      <div className="form-container">
        <h2 class="form-title">Register</h2>
        <form name="form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="input-label" htmlFor="firstName">First Name:</label>
            <input className="user-input-field" type="text" name="firstName" value={user.firstName} onChange={this.handleChange}/>
            {submitted && !user.firstName &&
              <div className="help-block">First name is required</div>
            }
          </div>
          <div className="form-group">
            <label className="input-label" htmlFor="lastName">Last Name:</label>
            <input className="user-input-field" type="text" name="lastName" value={user.lastName} onChange={this.handleChange}/>
            {submitted && !user.lastName &&
              <div className="help-block">Last name is required</div>
            }
          </div>
          <div className="form-group">
            <label className="input-label" htmlFor="userName">User Name:</label>
            <input className="user-input-field" type="text" name="userName" value={user.userName} onChange={this.handleChange}/>
            {submitted && !user.userName &&
              <div className="help-block">User name is required</div>
            }
          </div>
          <div className="form-group">
            <label className="input-label" htmlFor="email">Email:</label>
            <input className="user-input-field" type="text" name="email" value={user.email} onChange={this.handleChange}/>
            {submitted && !user.email &&
              <div className="help-block">Email is required</div>
            }
          </div>
          <div className="form-group">
            <button class="auth-btn local-btn">
              <SmIcon icon={PERSON_PLUS_ICON} color="#181818" />
              <span class="btn-text-divider" />
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}


export default Register;
