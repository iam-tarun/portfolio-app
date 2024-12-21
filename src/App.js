import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { Routes, Route } from "react-router-dom";
import Projects from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
        <Routes >
          <Route default path='/' element={<Home/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
