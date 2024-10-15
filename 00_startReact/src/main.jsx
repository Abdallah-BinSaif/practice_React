import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Profile from './props.jsx'
import Gellary from './App.jsx'
import TodoList from './Todos.jsx'
import './index.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
    
//     <Gellary />
//     <TodoList />
//   </StrictMode>,
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Profile />
  </StrictMode>,
)