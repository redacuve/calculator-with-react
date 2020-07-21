import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const {
    buttonName, color, wide, clickHandler,
  } = props;
  const widthValue = wide ? '50%' : '25%';
  const handleClick = name => { clickHandler(name); };
  return (
    <button
      type="button"
      className="button"
      style={{ backgroundColor: color, width: widthValue }}
      onClick={() => { handleClick({ buttonName }); }}
    >
      {buttonName}
    </button>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};
Button.defaultProps = { color: 'darkorange', wide: false };

export default Button;
