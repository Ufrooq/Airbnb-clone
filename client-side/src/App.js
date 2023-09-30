import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Feed from "./components/feed/Feed";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
