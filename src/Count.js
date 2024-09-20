import React,{useState} from "react";

function App(){
    const [Count , setCount] = useState(0);

    const increment = ()=>{
        setCount(Count+1);
    }

    const decrement =()=>{
        setCount(Count-1);
    }

    const reset =()=>{
        setCount(0);
    }

    return (
      <div className="container">
        <h2>Counter App By React</h2>
        <h3>Counter: {Count}</h3>
        <div className="button-container">
          <button type="button" onClick={increment}>
            Increment
          </button>
          <button type="button" onClick={decrement}>
            Decrement
          </button>
          <button type="button" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    );
}


export default App;