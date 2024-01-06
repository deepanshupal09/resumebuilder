import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Footer from "./components/Footer";
import BuildResume from "./components/BuildResume";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      //{" "}
      <Router>
        <Navbar></Navbar>
        <LandingPage></LandingPage>
        //{" "}
        <Routes>
          // <Route path="/" element={<LandingPage />} />
          // <Route path="/Login" element={<Login />} />
          //{" "}
        </Routes>
        <Footer></Footer>
        //{" "}
      </Router>
    </>
  );
}

export default App;
