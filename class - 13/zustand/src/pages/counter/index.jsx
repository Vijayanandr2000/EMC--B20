import React from "react";
import { useCounter } from "../../store/counter";

const Counter = () => {
  //   const [value, setValue] = useState(0);
  const { value, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1>Counter: {value}</h1>

      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <button onClick={increment}>INC</button>
        <button onClick={decrement}>DEC</button>
        <button onClick={reset}>RESET</button>
      </div>
    </>
  );
};

export default Counter;
