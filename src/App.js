import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterProfile from "./components/FooterProfile";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>

      <FooterProfile />
    </BrowserRouter>
  );
}

export default App;
