import './App.css';
import {useState} from "react";
import {ClassComponent} from "./components/ClassComponent";
import {PureComponent} from "./components/PureComponent";

function App() {
  const [counter, setCounter] = useState(0);

  const decrease = () => setCounter((prev) => --prev);

  const increase = () => setCounter((prev) => ++prev);

  return (
    <div className="App">
      <ClassComponent />
      <PureComponent />
      Counter {counter} <button onClick={increase}>+</button> <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
