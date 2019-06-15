import React, { Component } from 'react';
import { Collapse } from 'react-bootstrap';
import { connect } from 'react-redux';
import cx from 'classnames';
import firebase from '../../firebase'

class UserInfo extends Component {

  state = {
    isShowingUserMenu: false
  };

  render() {
    var users = firebase.auth().currentUser
    let { user } = this.props;
    let { isShowingUserMenu } = this.state;
    return (
      <div className="user-wrapper">
        <div className="user">
          <div className="userinfo">
            <div className="username">
              {users.email}
            </div>
          </div>
        </div>
      </div>
    );
  }
}



const mapStateToProps = state => ({
  user: state.Auth.user
});

export default connect(mapStateToProps)(UserInfo);