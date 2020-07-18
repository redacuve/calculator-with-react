import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { result } = props;
  return <div>{result}</div>;
}

Display.defaultProps = { result: '0' };
Display.propTypes = { result: PropTypes.string };

export default Display;
