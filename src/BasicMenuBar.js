import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Auth } from "aws-amplify";
import Button from "@material-ui/core/Button";
import "./BasicMenuBar.css";

class BasicMenuBar extends Component {
  handleLogout = async event => {
    await Auth.signOut();
  };

  render() {
    return (
      <div className="header">
        <div className="nav">
          <ul className="menu-bar">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
            {this.props.isAuthenticated ? (
              <Fragment>
                <li onClick={this.handleLogout}>Logout</li>
              </Fragment>
            ) : (
              <Fragment>
                <Link to="/login">
                  <li>Login</li>
                </Link>
              </Fragment>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default BasicMenuBar;
