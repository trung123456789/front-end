import React from 'react';
import { connect } from 'react-redux';

class ChangePasswordContainer extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    const { logined } = this.props;
    if (!logined) {
      this.props.history.push('/login');
    }

    return;
  }
}

const mapStateToProps = (state, ownProps) => {
  const { logined } = state.authed;
  return {
    logined,
  };
};
export default connect(mapStateToProps)(ChangePasswordContainer);
