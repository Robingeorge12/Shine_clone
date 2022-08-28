import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes';
import First from './Components/First';
import Home from './Components/Home';
// icon https://www.shine.com/next/static/images/shine-logo.png
function App() {
  return (
    <div className="App">
   
     <Navbar />
<AllRoutes />

    </div>
  );
}

export default App;
