import React, { useState } from 'react';
import useWhyDidYouUpdate from './UseWhyDidYouUpdate';
import'./App.css'

const Counter = React.memo(props => {
  useWhyDidYouUpdate('Counter', props);
  return <div className="counter">{props.count}</div>;
});


function App() {
  const [count, setCount] = useState(0);

  return (
      <div className='container'>
        <Counter count={count} />
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement </button>       
      </div>
  );
}

export default App;
