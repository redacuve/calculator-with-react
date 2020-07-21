import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function ButtonPanel(props) {
  const { clickHandler } = props;
  const handleClick = buttonName => { clickHandler(buttonName); };
  return (
    <div className="button-panel">
      <div>
        <Button buttonName="AC" color="gainsboro" clickHandler={handleClick} />
        <Button buttonName="+/-" color="gainsboro" clickHandler={handleClick} />
        <Button buttonName="%" color="gainsboro" clickHandler={handleClick} />
        <Button buttonName="÷" clickHandler={handleClick} />
      </div>
      <div>
        <Button buttonName="7" color="gainsboro" clickHandler={handleClick} />
        <Button buttonName="8" color="gainsboro" clickHandler={handleClick} />
        <Button buttonName="9" color="gainsboro" clickHandler={handleClick} />
        <Button buttonName="×" clickHandler={handleClick} />
      </div>
      <div>
        <Button buttonName="4" color="gainsboro" clickHandler={handleClick} />
        <Button buttonName="5" color="gainsboro" clickHandler={handleClick} />
        <Button buttonName="6" color="gainsboro" clickHandler={handleClick} />
        <Button buttonName="-" clickHandler={handleClick} />
      </div>
      <div>
        <Button buttonName="1" color="gainsboro" clickHandler={handleClick} />
        <Button buttonName="2" color="gainsboro" clickHandler={handleClick} />
        <Button buttonName="3" color="gainsboro" clickHandler={handleClick} />
        <Button buttonName="+" clickHandler={handleClick} />
      </div>
      <div>
        <Button buttonName="0" color="gainsboro" clickHandler={handleClick} wide />
        <Button buttonName="." color="gainsboro" clickHandler={handleClick} />
        <Button buttonName="=" clickHandler={handleClick} />
      </div>
    </div>
  );
}

ButtonPanel.propTypes = { clickHandler: PropTypes.func.isRequired };

export default ButtonPanel;
