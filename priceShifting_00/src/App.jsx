
import './App.css'
import NavBar from "./components/NavBar/NavBar.jsx";
import PricingOption from "./components/PricingOption/PricingOption.jsx";


function App() {



  return (
    <div className="container mx-auto">
        <NavBar></NavBar>
      {/*<h1>Vite + React</h1>*/}
        <PricingOption></PricingOption>
    </div>
  )
}

export default App;

