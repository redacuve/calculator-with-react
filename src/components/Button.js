import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { buttonName } = props;
  const { color } = props;
  const { wide } = props;
  const widthValue = wide ? '50%' : '25%';
  return (
    <button
      type="button"
      className="button"
      style={{ backgroundColor: color, width: widthValue }}
    >
      {buttonName}
    </button>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.string,
};
Button.defaultProps = { color: 'darkorange', wide: false };

export default Button;
