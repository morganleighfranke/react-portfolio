import React from "react";
import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from "./components/Portfolio";
import background from "./image/backround.jpeg";
import Footer from './components/Footer';
// import Contact from './components/Contact';

function App() {
  return (
    <div style={{ backgroundImage: `url(${background})`}}>
    <Navbar />
    <About />
    <Portfolio />
    <Footer />
    </div>
  );
}

export default App;
