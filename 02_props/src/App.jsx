import "./App.css";
import Card from "./components/Card";

function App() {
  const live = {
    city:"cumilla",
    thana: "shadar dokkhin"
  }
  return (
    <div className=" flex justify-center items-center h-screen flex-col">
      <h3 className="text-3xl font-bold underline bg-yellow-200 p-4 rounded-xl">
        Tailwind
      </h3>
      <div className="flex flex-shrink gap-10">
        <Card username="abdallah" age={12} livesIn={live}/>
        <Card />
        <Card />
        <Card />

      </div>
    </div>
  );
}

export default App;
