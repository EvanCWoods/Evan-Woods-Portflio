import React from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import "./styles/root.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
        <Navigation />
        <Routes>
            <Route exact path="/" element={ <Home /> }/>
            <Route exact path="/about" element={ <About /> }/>
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
