import React, { Component, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className="root">
        <AppBar position="static" style={{ background: "darkgreen" }}>
          <Toolbar>
            <Link to="/">
              <IconButton
                edge="start"
                className="menubutton"
                style={{ color: "yellow" }}
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            </Link>

            <Typography variant="h6" className="title">
              <Link to="/news">
                <Button style={{ color: "yellow" }}>News</Button>
              </Link>
            </Typography>

            <Link to="/about">
              <Button style={{ color: "yellow" }}>About Us</Button>
            </Link>
            <Link to="/contact">
              <Button style={{ color: "yellow" }}>Contact Us</Button>
            </Link>
            {this.props.isAuthenticated ? (
              <Fragment>
                <Button onClick={this.handleLogout} style={{ color: "yellow" }}>
                  Logout
                </Button>
              </Fragment>
            ) : (
              <Fragment>
                <Link to="/login">
                  <Button style={{ color: "yellow" }}>Login</Button>
                </Link>
              </Fragment>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Nav;
