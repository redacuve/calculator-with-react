import React from "react";
import PropTypes from "prop-types";

function Display(props) {
  return <div>{props.result}</div>;
}

Display.defaultProps = { result: "0" };
Display.propTypes = { result: PropTypes.string.isRequired };

export default Display;
