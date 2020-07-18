import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { buttonName } = props;
  return <button type="button">{buttonName}</button>;
}

Button.propTypes = { buttonName: PropTypes.string.isRequired };

export default Button;
