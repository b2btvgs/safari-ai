import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/core/Menu";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Safari AI
            </Typography>
            <Button color="inherit">Signup</Button>
            <LinkContainer to="/login">
              <Button color="inherit">Login</Button>
            </LinkContainer>
          </Toolbar>
        </AppBar>
      </Router>
    </div>
  );
};

export default Navbar;
