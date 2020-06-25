import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux';
import bg from '../img/bg.svg';
import avatar from '../img/avatar.svg';
import wave from '../img/wave.png';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
};

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focusName: false,
      focusPass: false,
      password: '',
      username: '',
      submitted: false,
    };
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onFocusName = this.onFocusName.bind(this);
    this.onBlurName = this.onBlurName.bind(this);
    this.onFocusPass = this.onFocusPass.bind(this);
    this.onBlurPass = this.onBlurPass.bind(this);
  }

  onChangePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  onChangeName(event) {
    this.setState({
      username: event.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    if (username && password) {
      this.props.login(username, password);
    }
  }

  onFocusName() {
    this.setState({
      ...this.state,
      focusName: true,
    })
  }

  onBlurName() {
    const focusName = this.state.username ? true : false;
    this.setState({
      ...this.state,
      focusName,
    })
  }

  onFocusPass() {
    this.setState({
      ...this.state,
      focusPass: true,
    })
  }

  onBlurPass() {
    const focusPass = this.state.password ? true : false;
    this.setState({
      ...this.state,
      focusPass,
    })
  }

  render() {
    const classNameForNameFocus = this.state.focusName ? "input-div focus" : 'input-div';
    const classNameForPassFocus = this.state.focusPass ? "input-div focus" : 'input-div';
    return (
      <div>
        <title>My App Login Form</title>
        <img className="wave-img" src={wave} alt="wave" />
        <div className="container">
          <div className="img">
            <img src={bg} alt="bg" />
          </div>
          <div className="login-content">
            <form onSubmit={this.handleSubmit}>
              <img src={avatar} alt="avatar" />
              <h2>Welcome</h2>
              <div className={classNameForNameFocus}>
              {/* <div className="input-div focus"> */}
                <div className="icon">
                  <FontAwesomeIcon className="icon-i" icon={faUser} />
                </div>
                <div>
                  <h5>Username</h5>
                  <input
                    type="text"
                    className="input-div-login"
                    value={this.state.username}
                    onChange={this.onChangeName}
                    onFocus={this.onFocusName}
                    onBlur={this.onBlurName}
                  />
                </div>
              </div>
              <div className={classNameForPassFocus}>
              {/* <div className="input-div focus"> */}
                <div className="icon">
                  <FontAwesomeIcon className="icon-i" icon={faLock} />
                </div>
                <div>
                  <h5>Password</h5>
                  <input
                    type="password"
                    className="input-div-login"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    onFocus={this.onFocusPass}
                    onBlur={this.onBlurPass}
                  />
                </div>
              </div>
              <a className="link-regist" href="/register">Create Account?</a>
              <a className="link-forgot" href="/">Forgot Password?</a>
              <input type="submit" className="btn-login" value="Login" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return { loggingIn };
}

const actionCreators = {
  // login: userActions.login,
  // logout: userActions.logout
};

export default connect(mapStateToProps, actionCreators)(LoginContainer);
