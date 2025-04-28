import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Card from "./components/Card";
import AddFavorites from "./components/AddFavorites";
import Favorites from "./components/Favorites";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                </>
              }
            />
            <Route path="/addfavorites" element={<AddFavorites />}></Route>
          </Routes>

          <Card />
        </Router>
      </div>
    </GlobalProvider>
  );
}

export default App;
