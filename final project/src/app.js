import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import NewsRoom from './components/NewsRoom';
import About from './components/About';
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/newsroom" Component={NewsRoom}/>
        <Route path="/about" Component={About}/>
        <Route path="/contact" Component={Contact}/>
        <Route path="/login" Component={Login}/>
        <Route path="/register" Component={Register}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

