import { useState } from 'react'


function App() {
const [color, setColor] = useState("black")
  return (
    <div 
    className='text-white h-screen duration-500 flex justify-center items-end'
    style={{backgroundColor:color}}>
      <div className='flex justify-center items-center p-2 bg-white text-black rounded-3xl'>
        <button onClick={()=>setColor("green")} className='p-2 bg-green-300 mr-2 rounded-full text-black'>Green</button>
        <button onClick={()=>setColor("red")} className='p-2 bg-red-300 mr-2 rounded-full text-black'>Red</button>
        <button onClick={()=>setColor("violet")} className='p-2 bg-violet-300 mr-2 rounded-full text-black'>Violet</button>
        <button onClick={()=>setColor("yellow")} className='p-2 bg-yellow-300 mr-2 rounded-full text-black'>Yellow</button>
      </div>
    </div>
  )
}

export default App
