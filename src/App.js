import Navbar from './components/Navbar';
import Listings from './components/Listings'
import './App.css';

function App() {
  return (
    <div className="App">
     <Navbar title="Austin Small Business" />
     <Listings />
    </div>
  );
}

export default App;
