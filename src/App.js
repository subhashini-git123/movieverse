import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import AddFavorites from "./components/AddFavorites";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Card />
      <AddFavorites/>
    </div>
  );
}

export default App;
