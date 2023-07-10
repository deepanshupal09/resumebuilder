import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import BuildResume from "./components/BuildResume";

function App() {
  return (
    <div>
      <Navbar></Navbar>

<<<<<<< HEAD
      {/* <LandingPage></LandingPage>  */}
      <BuildResume></BuildResume>
=======
      <LandingPage></LandingPage>
      {/* <BuildResume></BuildResume> */}
>>>>>>> a921b572b77805f5d6c04689707535a5c12a7423
      <Footer></Footer>
      
    </div>
  );
}

export default App;
