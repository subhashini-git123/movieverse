import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Card from "./components/Card";
import AddFavorites from "./components/AddFavorites";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
        <Router>
        <Navbar/>
          <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/addfavorites" element={<AddFavorites />} />
          </Routes>
        </Router>
    </GlobalProvider>
  );
}



export default App;
