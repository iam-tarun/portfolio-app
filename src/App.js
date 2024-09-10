import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from './Components/Projects';
import About from './Components/About';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='main-content' >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/portfolio-app' element={<Home/>} />
          <Route exact path='/projects' element={<Projects/>} />
          <Route exact path='/about' element={<About/>} />
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
