import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackspace, faEraser, faPlus, faMinus, faTimes, faDivide, faEquals, faPercent } from '@fortawesome/free-solid-svg-icons'

import './style.css';

function App(){
  const [data, setData] = useState("");
  const calculatorButtons = [];
  [7,8,9,4,5,6,1,2,3,'.',0,'%'].forEach(item => {
    calculatorButtons.push(
      <button onClick={ e => {
        (e.target.value !== undefined) ?
          setData(data + e.target.value)
        :
          console.log('Undefined variable. Please try again!');
      }}
      key={item}
      value={item}>
        {
          item === '%' ?
            <FontAwesomeIcon icon={faPercent} />
          :
            item
        }
      </button>
    );
  });


  return (
    <div className="wrapper">

      <div className="show-input">
        { data }
      </div>

      <div className="digits flex">
        { calculatorButtons }
      </div>

      <div className="modifiers subgrid">
        <button onClick={
          () => setData(data.substr(0, data.length - 1))
        }>
          <FontAwesomeIcon icon={faBackspace} />
        </button>
        <button onClick={
          () => setData('')}>
          <FontAwesomeIcon icon={faEraser} />
        </button>
      </div>

      <div className="operations subgrid">
        <button onClick={e => {
          (e.target.value !== undefined) ?
            setData(data + e.target.value)
          :
            console.log('Undefined variable. Please try again!')
        }} value="+">
            <FontAwesomeIcon icon={faPlus} />
        </button>
        <button onClick={e => {
          (e.target.value !== undefined) ?
            setData(data + e.target.value)
          :
            console.log('Undefined variable. Please try again!')
        }} value="-">
            <FontAwesomeIcon icon={faMinus} />
        </button>
        <button onClick={e => {
          (e.target.value !== undefined) ?
            setData(data + e.target.value)
          :
            console.log('Undefined variable. Please try again!')
        }} value="*">
            <FontAwesomeIcon icon={faTimes} />
        </button>
        <button onClick={e => {
          (e.target.value !== undefined) ?
            setData(data + e.target.value)
          :
            console.log('Undefined variable. Please try again!')
        }} value="/">
            <FontAwesomeIcon icon={faDivide} />
        </button>
        <button onClick={
          e => {
            try {
              setData(
                String(eval(data)).length > 3 && String(eval(data)).includes('.') ?
                  String(eval(data).toFixed(4))
                :
                  String(eval(data))
              )
            }catch(err){
              console.log(err);
            }
          }
        } value="=">
            <FontAwesomeIcon icon={faEquals} />
        </button>
      </div>

    </div>
  );
}

export default App;