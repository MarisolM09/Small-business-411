import Navbar from "./components/Navbar";
// import Listings from './components/Listings'

import "./App.css";
// import PizzaListing from "./components/PizzaListing";
// import CoffeeListing from "./components/CoffeeListing";
import Login from './components/Login'

function App() {
  return (
    <div className="App">
    
      <Navbar title="Austin Small Business" />
      {/* <Listings /> */}
      <Login />
    </div>
  );
}

export default App;
