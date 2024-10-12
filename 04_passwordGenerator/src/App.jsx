import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-white font-bold text-center">
      <div className="max-w-lg bg-gray-700 px-4 py-10 mt-10 mx-auto rounded-3xl">
        <p>Password Generator</p>
        <div className="flex my-4">
          <input
            className="rounded-l-full px-8 py-3 w-full"
            type="text"
            placeholder="Password"
          />
          <button className="px-8 py-3 bg-blue-500 rounded-r-full">Copy</button>
        </div>
        <div className="flex gap-4 justify-center">
          <div className="text-left flex items-center gap-1">
            <input type="range" />
            <p className="text-blue-500">length: {2}</p>
          </div>
          <div className="flex gap-1 text-blue-500">
            <input type="checkbox" />
            <p>Numbers</p>
          </div>
          <div className="flex gap-1 text-blue-500">
            <input type="checkbox" />
            <p>Charecters</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
