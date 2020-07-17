import React from "react";
import PropTypes from "prop-types";

function Button(props) {
  return <button>{props.buttonName}</button>;
}

Button.propTypes = { buttonName: PropTypes.string.isRequired };

export default Button;
