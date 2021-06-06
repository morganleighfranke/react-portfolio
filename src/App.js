import React from "react";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import Header from "./components/Header";
import About from "./pages/about";
import Footer from "./components/Footer";
import { HashRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Header />
    
          <Route exact path="/" component={Home} />
          <Route path="/react-portfolio" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
         
          <Footer />
    </div>
    </Router>
  );
}

export default App;
