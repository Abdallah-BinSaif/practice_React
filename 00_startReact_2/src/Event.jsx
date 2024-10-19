import { useState } from "react";

export default function Event() {
    let [count, setCount] = useState(0)
  // function increase(){
  //   setCount(count+1)
  // }
  // const decrease = () =>{
  //   setCount(count-1)
  // }
  const addFive = (num) => {
    setCount(count + 5);
  };
  return (
    <>
      <div className="box1">
        <p>Count: {count}</p>
        <button
          onClick={() => {
            addFive(3);
          }}
        >
          Increase
        </button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
    </>
  );
}
