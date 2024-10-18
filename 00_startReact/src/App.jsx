import './App.css'
import Todos from './components/conditional/Todos';

function Profile(){
  return (
    <img 
    src='https://i.imgur.com/MK3eW3Am.jpg'
    alt='Katherine Johnson' />
  )
}
function Gellary(){
  return(
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  )
}

export default Gellary;