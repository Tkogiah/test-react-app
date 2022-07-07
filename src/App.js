import './App.css';
import HelloText from './HelloText'
import React from 'react';

export default function App() {

  const[number, setNumber] = React.useState(0);
  const[textValue, setTextValue] = React.useState('');
  //const[number, setNumber] = React.useState(0);
  

  return (
    <div className="App">
      <HelloText />
      <h2>{number}</h2>
      <button onClick={() => setNumber(number + 1)}>
        +
      </button>
      <input onChange={e => setTextValue(e.target.value)} type='text' />
      <h2>{textValue}</h2>
      {textValue.length > 10 && <h3>too many caharcters buddy</h3>}
    </div>
  );
}

