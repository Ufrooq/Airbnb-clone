import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Feed from "./components/feed/Feed";
import Footer from "./components/footer/Footer";
import Rooms from "./components/rooms/Rooms";
import Login from "./components/login/Login";
import { createContext, useState } from "react";

export const globalContext = createContext();
function App() {
  // const [showModel, setShowModel] = useState(false);
  return (
    // <globalContext.Provider value={{ showModel, setShowModel }}>
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/login" element={<Login />} />
          <Route path="/rooms" element={<Rooms />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    // </globalContext.Provider>
  );
}

export default App;
