//updater function = A function passed as an argument to setState() usually
//                   ex. setYear(arrow funtion)
//                   Allow for safe updates based on the previous state
//                   Used with multiple state updates and asynchronous functions

import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    // Uses the CURRENT state to calculate the NEXT state.
    // set functions do not trigger an update.
    // React batches together state updates for performance reasons.
    // NEW state becomes the CURRENT state aften an update
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);

    // Takes the PENDING state to calculate NEWXT state.
    // React puts your updater function in a queue
    // During the next render, it will call them in the same order.
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };

  const decrement = () => {
    setCount((c) => c - 1);
  };

  const reset = () => {
    setCount((c) => 0);
  };

  return (
    <div className="counter-container">
      <h2 className="count-display">{count}</h2>
      <button className="counter-button" onClick={decrement}>
        Decrement
      </button>
      <button className="counter-button" onClick={reset}>
        Reset
      </button>
      <button className="counter-button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
