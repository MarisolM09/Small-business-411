import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar title="Austin Small Business" />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
