import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Feed from "./components/feed/Feed";
import Footer from "./components/footer/Footer";
import Rooms from "./components/rooms/Rooms";
import Login from "./components/login/Login";
import Reg from "./components/register/Reg";
import { createContext, useEffect, useState } from "react";
import Account from "./components/account/Account";
import PerInfo from "./components/account/PerInfo";
import Bookings from "./components/account/Bookings";
import AccForm from "./components/account/Accomodation/AccForm";
import AccomodationPage from "./components/account/Accomodation/AccomodationPage";

export const globalContext = createContext();
function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  // const isLoggedInHandler = async () => {
  // try {
  //   const response = await fetch(`${process.env.REACT_APP_BASE_URL}/users`, {
  //     method: "GET",
  //     credentials: "include",
  //   });
  //   console.log(response);
  //   return response.ok;
  // } catch (error) {
  //   console.error(error);
  // }
  // };

  // useEffect(() => {
  //   const checkLoggedIn = async () => {
  //     try {
  //       const isLoggedIn = await isLoggedInHandler();
  //       console.log(isLoggedIn);
  //       setisLoggedIn(isLoggedIn);
  //     } catch (error) {
  //       console.log(error.message);
  //       setisLoggedIn(false);
  //     }
  //   };
  //   checkLoggedIn();
  // }, []);

  return (
    <globalContext.Provider value={{ isLoggedIn, setisLoggedIn }}>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Reg />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/account" element={<Account />}>
              <Route path="perInfo" element={<PerInfo />} />
              <Route path="accomodations" element={<AccomodationPage />}>
                <Route path="new" element={<AccForm />} />
              </Route>
              <Route path="bookings" element={<Bookings />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </globalContext.Provider>
  );
}

export default App;
