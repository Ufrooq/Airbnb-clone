import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
// import Foot from "./components/footer/Foot";
import Feed from "./components/feed/Feed";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
        </Routes>
        {/* <Foot /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
