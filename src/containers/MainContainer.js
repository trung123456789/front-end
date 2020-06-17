import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CHANGE_PASSWORD, LOGIN } from '../constants/PathConstants';


class MainContainer extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
    };

    this.handleLogout = this.handleLogout.bind(this);
  }

  componentWillMount() {
    const { dispatch, logined } = this.props;
    if (!logined) {
      this.setState({
        loading: true,
      });
      // const self = this;
      // dispatch(checkLogin()).then(() => {
      //   self.setState({ loading: true });
      // });
    }
  }

  handleLogout() {
  }

  render() {
    const {
      logined,
      passwordChangeFlag,
    } = this.props;
    if (this.state.loading && !logined) {
      return <Redirect to={LOGIN} />;
    }
    if (passwordChangeFlag) {
      return <Redirect to={CHANGE_PASSWORD} />;
    }
    return logined ? <div /> : <div />
  }
}

MainContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const { logined } = state.authed;
  let passwordChangeFlag = 0;
  return {
    logined,
    passwordChangeFlag,
  };
};
export default connect(mapStateToProps)(MainContainer);
