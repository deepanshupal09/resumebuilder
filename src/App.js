import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import BuildResume from "./components/BuildResume";

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <LandingPage></LandingPage>
      {/* <BuildResume></BuildResume> */}
      <Footer></Footer>
      
    </div>
  );
}

export default App;
