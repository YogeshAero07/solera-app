import React from "react";
import "./Header.css";

import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

const useStyles = makeStyles({
  list: {
    width: 400,
  },
  fullList: {
    width: "auto",
  },
});

const Header = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className="menu__list"
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="menu__list__one">
        <p>Multivitamin</p>
        <p>Protein</p>
        <p>Pregnancy</p>
        <p>Bundles</p>
      </div>
      <div className="menu__list__two">
        <p>Who We Are</p>
        <p>Ingredients</p>
        <p>Our Clinical Study</p>
        <p>The Journal</p>
      </div>
      <div className="menu__account">
        <a href="">
          <AccountCircleOutlinedIcon />
          <span>Account</span>
        </a>
      </div>
    </div>
  );
  return (
    <>
      <div className="header__container">
        <div className="header__menu">
          {["left"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>Menu</Button>
              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </SwipeableDrawer>
            </React.Fragment>
          ))}
        </div>
        <div className="header__logo">
          <a href="/">Ritual</a>
        </div>
        <div className="header__text">
          <a href="">Who We Are</a>
          <LocalMallIcon />
        </div>
      </div>
      <Divider />
    </>
  );
};

export default Header;
