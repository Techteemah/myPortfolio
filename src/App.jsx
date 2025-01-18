import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./static/Header";
import Footer from "./static/Footer";


const App = () => {
  return (
    <>
      <Router>
         
          <Header/>
      
                <Routes>
                <Route path="/" element={<Home/>} />
                </Routes>

          <Footer/>            
      </Router>
    </>
    
  );
};



export default App;
