import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import StadiumList from "../StadiumList/StadiumList";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar />
          <Routes>
            {/* Route components in here */}
            <Route path="/stadiums" element={<StadiumList />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
