import React from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import "./styles/root.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
        <Navigation />
        <Routes>
            <Route exact path={`${process.env.PUBLIC_URL}/`} element={ <Home /> }/>
            <Route exact path={`${process.env.PUBLIC_URL}/about`} element={ <About /> }/>
            <Route exact path={`${process.env.PUBLIC_URL}/projects`} element={ <Projects /> }/>
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
