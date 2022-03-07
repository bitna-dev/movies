import React, { useState } from "react";

function Counter() {
    const [value, setValue] = useState(0);
    const increase = () => {
      setValue(prevValue => prevValue + 1);
    }
    const decrease = () => {
      setValue(prevValue => prevValue - 1); // 함수형업데이트 최적화를 위한
    }
    
  return (
      <>
      <p>{value}</p>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
      </>
  );
}

export default Counter;
