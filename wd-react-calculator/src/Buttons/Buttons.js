import React from 'react';
import PropTypes from 'prop-types'

const Buttons = ({
  handleClickNumber,
  handleClickOperator,
  handleClickEquals,
  handleClickClear
}) => (
  <div id="button-container">
    <div className="buttons">
      <span onClick={handleClickClear} className="operator" id="cancel">C</span>
      <span onClick={(e) => handleClickOperator(e.target.innerText)} className="operator">/</span>
      <span onClick={(e) => handleClickOperator(e.target.innerText)} className="operator">x</span>
      <span onClick={(e) => handleClickNumber(e.target.innerText)} >7</span>
      <span onClick={(e) => handleClickNumber(e.target.innerText)}>8</span>
      <span onClick={(e) => handleClickNumber(e.target.innerText)}>9</span>
      <span onClick={(e) => handleClickOperator(e.target.innerText)} className="operator">-</span>
      <span onClick={(e) => handleClickNumber(e.target.innerText)}>4</span>
      <span onClick={(e) => handleClickNumber(e.target.innerText)}>5</span>
      <span onClick={(e) => handleClickNumber(e.target.innerText)}>6</span>
      <span onClick={(e) => handleClickOperator(e.target.innerText)} className="operator">+</span>
      <span onClick={(e) => handleClickNumber(e.target.innerText)}>1</span>
      <span onClick={(e) => handleClickNumber(e.target.innerText)}>2</span>
      <span onClick={(e) => handleClickNumber(e.target.innerText)}>3</span>
      <span onClick={handleClickEquals} className="operator" id="calc">=</span>
      <div className="l-row">
        <span id="zero" onClick={(e) => handleClickNumber(e.target.innerText)}>0</span>
      </div>
    </div>
  </div>
);

Buttons.propTypes = {
  handleClickNumber: PropTypes.func,
  handleClickOperator: PropTypes.func,
  handleClickEquals: PropTypes.func,
  handleClickClear: PropTypes.func
}


export default Buttons;