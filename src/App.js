import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import Header from "./components/Header";
import About from "./pages/about";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/react-portfolio" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          </Switch>
          <Footer />
    </div>
    </Router>
  );
}

export default App;
