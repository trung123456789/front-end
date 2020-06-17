import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <p>You're logged in with React!!</p>
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}


const connectedHomePage = connect()(HomePage);
export { connectedHomePage as HomePage };