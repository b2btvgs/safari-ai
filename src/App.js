import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import { Auth } from "aws-amplify";
import Amplify from "@aws-amplify/core";
import Nav from "./components/Nav";
import BasicMenuBar from "./BasicMenuBar";
import Routes from "./Routes";
import config from "./aws-exports";
import "./App.css";
Amplify.configure(config);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
    };
  }

  async componentDidMount() {
    console.log("initiating componentDidMount");
    try {
      await Auth.currentSession();
      this.userHasAuthenticated(true);
    } catch (e) {
      if (e !== "No current user") {
        alert(e);
      }
    }

    this.setState({ isAuthenticating: false });
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  };

  handleLogout = async event => {
    await Auth.signOut();

    this.userHasAuthenticated(false);

    console.log("this.props is: " + JSON.stringify(this.props));

    this.props.history.push("/login");
  };

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (
      !this.state.isAuthenticating && (
        <Router>
          <div className="App">
            <div className="header">
              <div className="nav">
                <ul className="menu-bar">
                  {this.state.isAuthenticated ? (
                    <Fragment>
                      <Link to="/">
                        <li>Home</li>
                      </Link>
                      <Link to="/about">
                        <li>About</li>
                      </Link>
                      <Link to="/contact">
                        <li>Contact</li>
                      </Link>
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
          </div>

          <Routes childProps={childProps} />
        </Router>
      )
    );
  }
}

// function App() {
//   return (
//     <Router>
//       <div className="App" />
//       <Nav />
//       <Routes />
//     </Router>
//   );
// }

export default withRouter(App);
