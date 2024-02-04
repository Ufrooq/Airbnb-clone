import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./pages/navbar/Navbar";
import Feed from "./pages/feed/Feed";
import Footer from "./pages/footer/Footer";
import Rooms from "./pages/rooms/Rooms";
import Login from "./pages/login/Login";
import Reg from "./pages/register/Reg";
import { createContext, useState } from "react";
import Account from "./pages/account/Account";
import PerInfo from "./pages/account/PerInfo";
import AccForm from "./pages/account/Accomodation/AccForm";
import AccomodationPage from "./pages/account/Accomodation/AccomodationPage";
import Bookings from "./pages/account/Booking/Bookings";
import BookedPlace from "./pages/account/Booking/BookedPlace";
export const globalContext = createContext();
function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  return (
    <globalContext.Provider value={{ isLoggedIn, setisLoggedIn }}>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Reg />} />
            <Route path="/rooms/:id" element={<Rooms />} />
            <Route path="/account" element={<Account />}>
              <Route path="perInfo" element={<PerInfo />} />
              <Route path="accomodations" element={<AccomodationPage />}>
                <Route path="new" element={<AccForm />} />
                <Route path=":id" element={<AccForm />} />
              </Route>
              <Route path="bookings" element={<Bookings />} />
              <Route path="bookings/:id" element={<BookedPlace />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </globalContext.Provider>
  );
}

export default App;
