import React, { Component } from 'react';

import SmIcon from '../Icons/SmIcon';
import { 
  GITHUB_ICON, 
  GOOGLE_ICON, 
  FACEBOOK_ICON, 
  PERSON_PLUS_ICON, 
  USER_CLIPBOARD_ICON } from '../Icons/IconList';

class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      submitted: false
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
    const { username, password } = this.state;
    const { dispatch } = this.props;

    /*if (username && password) {
      dispatch(userActions.login(username, password));
    }*/
  }

  render() {
    const { username, password, submitted } = this.state;
    return (
      <div className="form-container">
        <h2 class="form-title">Log In</h2>
        <form name="form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="input-label" htmlFor="username">Username:</label>
            <input className="user-input-field" type="text" name="username" value={username} onChange={this.handleChange}/>
            {submitted && !username &&
              <div className="help-block">Username is required</div>
            }
          </div>
          <div className="form-group">
            <label className="input-label" htmlFor="password">Password:</label>
            <input className="user-input-field" type="text" name="password" value={password}/>
            {submitted && !password &&
              <div className="help-block">Password is required</div>
            }
          </div>
          <div className="form-group">
            <button class="auth-btn local-btn">
              <SmIcon icon={USER_CLIPBOARD_ICON} color="#181818" />
              <span class="btn-text-divider" />
              Log In
            </button>
          </div>
        </form>

        <h3 className="divider-text">or log in through social media...</h3>

        <div id="social-media-btns">
          <a href="/auth/google">
            <button className="auth-btn social-btn" id="google-btn">
              <SmIcon icon={GOOGLE_ICON} />
              <span class="btn-text-divider" />
              Sign In with Google
          </button>
          </a>
          <a href="/auth/facebook">
            <button className="auth-btn social-btn" id="facebook-btn">
              <SmIcon icon={FACEBOOK_ICON} />
              <span class="btn-text-divider" />
              Sign In with Facebook
          </button>
          </a>
          <a href="/auth/github">
            <button className="auth-btn social-btn" id="github-btn">
              <SmIcon icon={GITHUB_ICON} />
              <span class="btn-text-divider" />
              Sign In with Github
          </button>
          </a>
        </div>
      </div>
    );
  }
}

export default LogIn;
