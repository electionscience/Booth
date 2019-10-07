import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import gql from "graphql-tag";
import "./Home.css";
import { Navbar, Button } from "react-bootstrap";
import AllPollsList from "../Poll/AllPollsList";
import auth from "../Auth/Auth";

class Home extends Component {
  constructor() {
    super();
    this.state = { session: false };
  }
  login() {
    this.props.auth.login();
  }
  logout() {
    this.props.auth.logout();
  }
  updateLastSeen = () => {
    const userId = auth.sub;
    const timestamp = moment().format();
    if (this.props.client) {
      this.props.client
        .mutate({
          mutation: gql`
            mutation($userId: String!, $timestamp: timestamptz!) {
              update_users(
                where: { auth0_id: { _eq: $userId } }
                _set: { auth0_id: $userId, last_seen: $timestamp }
              ) {
                affected_rows
              }
            }
          `,
          variables: {
            userId: userId,
            timestamp: timestamp
          }
        })
        .then(() => {
          // handle response if required
        })
        .catch(error => {
          console.error(error);
        });
    }
  };
  componentDidMount() {
    const { renewSession } = auth;

    if (localStorage.getItem("isLoggedIn") === "true") {
      renewSession().then(data => {
        this.setState({ session: true });
      });
    } else {
      window.location.href = "/";
    }
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    if (!this.state.session) {
      return <div>Loading</div>;
    }
    return (
      <div>
        <Navbar fluid className="removeMarBottom">
          <Navbar.Header className="navheader">
            <Navbar.Brand className="navBrand">
              Booth: a polling app
            </Navbar.Brand>
            {!isAuthenticated() && (
              <Button
                id="qsLoginBtn"
                bsStyle="primary"
                className="btn-margin logoutBtn"
                onClick={this.login.bind(this)}
              >
                Log In
              </Button>
            )}
            {isAuthenticated() && (
              <Button
                id="qsLogoutBtn"
                bsStyle="primary"
                className="btn-margin logoutBtn"
                onClick={this.logout.bind(this)}
              >
                Log Out
              </Button>
            )}
          </Navbar.Header>
        </Navbar>
        <div>
          <div className="col-xs-12 col-md-12 col-lg-9 col-sm-12 noPadd">
            <div>
              <div className="col-md-6 col-sm-12">
                <div className="wd95 addPaddTopBottom">
                  <div className="sectionHeader">All Polls</div>
                  <AllPollsList
                    userId={auth.getSub()}
                    client={this.props.client}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  auth: PropTypes.object,
  isAuthenticated: PropTypes.bool
};

export default Home;
