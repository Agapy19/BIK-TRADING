import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

import Nav from './componenents/nav/Nav';
import Home from './componenents/home/Home';
import Footer from './componenents/footer/Footer';
import About from './componenents/about/About';
/* import Service from './componenents/about/service/Service'; */
import Contact from './componenents/contact/Contact';
import Service from './componenents/service/Service';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} /> 
      <Route path="/About" element={<About/>} />
      <Route path="/Services" element={<Service/>} /> 
      <Route path="/Contact" element={<Contact/>} />

      </Routes>


    </BrowserRouter>
  );
}

export default App;
