import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Foot from "./components/footer/Foot";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route></Route>
        </Routes>
        <Foot />
      </BrowserRouter>
    </div>
  );
}

export default App;
