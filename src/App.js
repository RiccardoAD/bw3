import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import FooterProfile from "./components/FooterProfile";
// import LinkedInNavbar from "./components/LinkedInNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import "../src/assets/css/style.css";
import Login from "./components/Login";
import HomeAndFooterDx from "./components/HomeAndFooterDx";

function App() {
  return (
    <BrowserRouter>
      {/* <LinkedInNavbar /> */}
      <Routes>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomeAndFooterDx />} />
      </Routes>
{/* 
      <FooterProfile /> */}
    </BrowserRouter>
  );
}

export default App;
