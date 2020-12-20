import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
const NavBar = (props) => {
  return (
    <div>
      <Button color="primary" variant="contained">
        Hello
      </Button>
    </div>
  );
};

NavBar.propTypes = {};

export default NavBar;
