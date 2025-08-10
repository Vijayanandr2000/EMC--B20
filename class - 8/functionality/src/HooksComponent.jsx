import React, { useState } from "react";

const HooksComponent = () => {
  //   let count = 0;
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          //   setCount(count + 1);
          //   setCount(count + 1);
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
          console.log("count", count);
        }}
      >
        Inc
      </button>
    </div>
  );
};

export default HooksComponent;
