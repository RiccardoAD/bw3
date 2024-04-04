import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import LinkedInNavbar from "./components/LinkedInNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import "../src/assets/css/style.css";
import Login from "./components/Login";
import ExperiencesPage from "./components/ExperiencesPage";
import HomeAndFooterDx from "./components/HomeAndFooterDx";

function App() {
  return (
    <BrowserRouter>
      <LinkedInNavbar />
      <Routes>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/experiences/:userId" element={<ExperiencesPage />} />
        <Route path="/" element={<HomeAndFooterDx />} />
      </Routes>

      
    </BrowserRouter>
  );
}

export default App;
