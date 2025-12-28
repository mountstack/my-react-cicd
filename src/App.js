import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{height: '150px'}} />
        <div>
          <h1 style={{color: 'white', fontSize: '80px'}}>{count}</h1> 

          <button
            style={{padding: '5px 25px', fontSize: '80px', marginRight: '20px', cursor: 'pointer'}}
            onClick={() => setCount(count+1)}
          >
            +
          </button>
          <button
            style={{padding: '5px 25px', fontSize: '80px', cursor: 'pointer'}}
            onClick={() => setCount(count-1)}
          >
            -
          </button> 
        </div>
      </header>

    </div>
  );
}

export default App;
