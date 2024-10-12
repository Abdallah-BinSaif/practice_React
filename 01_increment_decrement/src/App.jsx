import { useState } from 'react'


function App() {
  const [count, setCount] = useState(100)
  const increment = () => {
    if(count<120)
      setCount(count + 1);
  }
  const decrement = () => {
    if(count>100)
      setCount(count - 1);
  }

  return (
    <>
      <div className='text-7xl font-bold underline text-center'>
        Tailwind
        <div>
          <button className='p-6 pb-6 my-4 border-2 rounded-3xl bg-slate-800 text-gray-400'>{count}</button><br />
          <button onClick={increment} className='p-2 pb-6 my-4 mx-6 border-2 rounded-xl bg-green-100'>Increment</button>
          <button onClick={decrement} className='p-2 pb-6 my-4 mx-6 border-2 rounded-xl bg-red-100'>Decrement</button>
        </div>
      </div>
    </>
  )
}

export default App
