import Todos from "./components/conditional/Todos";

export default function () {
  return (
    <div className="box1">
        <h3 className="font-bold ">Todos</h3>
        <ol>
        <Todos task="react" isDone={true}></Todos>
        <Todos task="core concept" isDone={false}></Todos>
        <Todos task="JSX" isDone={true}></Todos>

        </ol>
      
    </div>
  );
}
