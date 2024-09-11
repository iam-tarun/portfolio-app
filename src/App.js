import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { Routes, Route } from "react-router-dom";
import Projects from './Components/Projects';
import About from './Components/About';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='main-content' >
        <Routes>
          <Route default path='/' element={<Home/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
