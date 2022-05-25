import "./App.css";
import logo from "./assets/logo.png";
import Button from "./components/button";
import Counter from "./components/counter";
import {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);
  
  const addCounter = () => {
    setCount(count + 1);
  }
  
  const restartCounter = () => {
    setCount(0);
  }
  return (
    <div className="App">
      <div className="App-logo-container">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="App-counter-container">
        <Counter count={count}/>
        <Button text="Click" isClicked={true} handleClick={addCounter}  />
        <Button text="Restart" isClicked={false} handleClick={restartCounter} />
      </div>
    </div>
    );
}

export default App;
