
import './App.css';
import DataLoad from "./components/DataLoad/DataLoad.jsx";

import NavBar from "./components/NavBar/NavBar.jsx";
import Users from "./components/Users/Users.jsx";
// import PricingOption from "./components/PricingOption/PricingOption.jsx";


function App() {



  return (
    <div className="container mx-auto">
        <NavBar></NavBar>
      {/*/!*<h1>Vite + React</h1>*!/*/}
      {/*  <PricingOption></PricingOption>*/}
      {/*  <LChart></LChart>*/}
        <Users></Users>
        <DataLoad></DataLoad>
    </div>
  )
}

export default App;

