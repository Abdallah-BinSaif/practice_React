import Actor from "./components/Maps/Actor.jsx"
import Singer from "./components/Maps/Singer.jsx";
function Film(){
  const actors = ['Sakib', 'Shoriful Raj', 'Jasim', 'Rubel', 'Salman Shah'];

  const singers = [
    {id: 1,  name: 'Dr. Mahfuzur', age: 68},
    {id: 2, name: 'Eva Rahman', age: 38},
    {id: 3, name: 'Shuvro Dev', age: 58},
    {id: 4, name: 'Pritom', age: 28},
  ]
    
  return (
    <div>
        <ol className="box1">
        <h1 className='font-bold'>Actors</h1>
            {
                actors.map((actor)=> <Actor name={actor}></Actor>)

            }
        </ol>

        <ol className="box1">
            <h1 className='font-bold'>Singers</h1>
            {
                singers.map((singer)=> <Singer name={singer.name} age={singer.age}></Singer>)
            }
        </ol>

    </div>
  )
}

export default Film;