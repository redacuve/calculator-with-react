import React from 'react';
import Button from './Button';

function ButtonPanel() {
  return (
    <div className="button-panel">
      <div>
        <Button buttonName="AC" color="gainsboro" />
        <Button buttonName="+/-" color="gainsboro" />
        <Button buttonName="%" color="gainsboro" />
        <Button buttonName="÷" />
      </div>
      <div>
        <Button buttonName="7" color="gainsboro" />
        <Button buttonName="8" color="gainsboro" />
        <Button buttonName="9" color="gainsboro" />
        <Button buttonName="×" />
      </div>
      <div>
        <Button buttonName="4" color="gainsboro" />
        <Button buttonName="5" color="gainsboro" />
        <Button buttonName="6" color="gainsboro" />
        <Button buttonName="-" />
      </div>
      <div>
        <Button buttonName="1" color="gainsboro" />
        <Button buttonName="2" color="gainsboro" />
        <Button buttonName="3" color="gainsboro" />
        <Button buttonName="+" />
      </div>
      <div>
        <Button buttonName="0" color="gainsboro" wide />
        <Button buttonName="." color="gainsboro" />
        <Button buttonName="=" />
      </div>
    </div>
  );
}

export default ButtonPanel;
