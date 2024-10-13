import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const passwordGenrator = useCallback(() => {
    
    let pass = "";
    let str = "ABCDEpqrstuvFNOPQRSfghijkTUVWXYZabcdeGHIJKLMlmnowxyz";
    if (numberAllowed) str += "0183427569";
    if (charAllowed) str += "~!@#$%^&*<>?/|,.-_+";
    

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenrator();
  }, [length, numberAllowed, charAllowed, passwordGenrator]);

  
  // useRef hook
  const passwordRef = useRef(null)

  const copyToClipbord = () => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }
  return (
    <div className="text-white font-bold text-center">
      <div className="max-w-lg bg-gray-700 px-4 py-10 mt-10 mx-auto rounded-3xl">
        <p>Password Generator</p>
        <div className="flex my-4">
          <input
            className="rounded-l-full px-8 py-3 w-full text-black"
            type="text"
            placeholder="Password"
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyToClipbord} className="px-8 py-3 bg-blue-500 rounded-r-full">Copy</button>
        </div>
        <div className="flex gap-4 justify-center">
          <div className="text-left flex items-center gap-1">
            <input
              className="cursor-pointer"
              type="range"
              min={5}
              max={20}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label>
              <p className="text-blue-500">length: {length}</p>
            </label>
          </div>
          <div className="flex gap-1 text-blue-500">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <p>Numbers</p>
          </div>
          <div className="flex gap-1 text-blue-500">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <p>Charecters</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
