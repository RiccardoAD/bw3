
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FooterProfile from './components/FooterProfile';
import FooterHomeDx from './components/FooterHomeDX';

function App() {
  return (
    <div className="App">
    <>
      {/* <BrowserRouter>
        <LinkNav />
        <Routes>
          <Route path="/profile" element={<Main />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/profile/:userId" element={<OtherProfile />} />
          <Route path="/" element={<Home />} />
          <Route path="/jobsdetails/:jobid" element={<JobsDetails />} />
        </Routes>
  
      </BrowserRouter> */}
      <FooterHomeDx/>
      <br/>
      <FooterProfile />
    </>

  </div>
);
   
    

}

export default App;
