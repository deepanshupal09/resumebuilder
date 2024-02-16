import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Footer from "./components/Footer";
import BuildResume from "./components/BuildResume";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Navbar></Navbar> */}
      {/* <BuildResume> */}
      //{" "}
      <Router>
        <Navbar></Navbar>
        {/* <LandingPage></LandingPage>{" "} */}
        {/* <BuildResume></BuildResume> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Login" element={<Login />} />{" "}
        </Routes>
        <Footer></Footer>{" "}
      </Router>
      {/* </BuildResume> */}
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
