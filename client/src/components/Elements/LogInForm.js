import React, { Component } from 'react';


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
        <h2>Log In</h2>
        <form name="form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" value={username} onChange={this.handleChange}/>
            {submitted && !username &&
              <div className="help-block">Username is required</div>
            }
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="text" name="password" value={password}/>
            {submitted && !password &&
              <div className="help-block">Password is required</div>
            }
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default LogIn;
