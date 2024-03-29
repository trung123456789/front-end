import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { faUser, faLock, faPen } from "@fortawesome/free-solid-svg-icons";

import { userActions } from '../_actions';
import bg from '../img/bg.svg';
import wave from '../img/wave.png';
import register from '../img/register.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        if (user.firstName && user.lastName && user.username && user.password) {
            this.props.register(user);
        }
    }

    render() {
        return (
            <div>
                <title>My App Login Form</title>
                <img className="wave-img" src={wave} alt="wave" />
                <div className="container">
                    <div className="img">
                        <img src={bg} alt="bg" />
                    </div>
                    <div className="login-content">
                        <form action="index.html">
                            <img src={register} alt="register" />
                            <p className="title">Register Form</p>
                            <div className="input-div">
                                <div className="icon">
                                    <FontAwesomeIcon className="icon-i" icon={faPen} />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        className="input-div-register"
                                        placeholder="First Name"
                                        value={this.state.username}
                                        onChange={this.onChangeName}
                                        onFocus={this.onFocusName}
                                        onBlur={this.onBlurName}
                                    />
                                </div>
                            </div>
                            <div className="input-div">
                                <div className="icon">
                                    <FontAwesomeIcon className="icon-i" icon={faPen} />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        className="input-div-register"
                                        placeholder="Last Name"
                                        value={this.state.username}
                                        onChange={this.onChangeName}
                                        onFocus={this.onFocusName}
                                        onBlur={this.onBlurName}
                                    />
                                </div>
                            </div>
                            <div className="input-div">
                                <div className="icon">
                                    <FontAwesomeIcon className="icon-i" icon={faUser} />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        className="input-div-register"
                                        placeholder="Username"
                                        value={this.state.username}
                                        onChange={this.onChangeName}
                                        onFocus={this.onFocusName}
                                        onBlur={this.onBlurName}
                                    />
                                </div>
                            </div>
                            <div className="input-div">
                                <div className="icon">
                                    <FontAwesomeIcon className="icon-i" icon={faLock} />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        className="input-div-register"
                                        placeholder="Password"
                                        value={this.state.username}
                                        onChange={this.onChangeName}
                                        onFocus={this.onFocusName}
                                        onBlur={this.onBlurName}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary" onClick={this.handleSubmit}>Register</button>
                                <Link to="/login" className="btn btn-link">Cancel</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

function mapState(state) {
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    register: userActions.register
}

const connectedRegisterPage = connect(mapState, actionCreators)(RegisterPage);
export { connectedRegisterPage as RegisterPage };