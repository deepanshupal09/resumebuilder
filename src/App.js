import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Footer from "./components/Footer";
import BuildResume from "./components/BuildResume";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      {/* <Navbar></Navbar> */}
      {/* <BuildResume> */}{" "}
      <Router>
        <Navbar></Navbar>
        {/* <LandingPage></LandingPage>{" "} */}
        {/* <BuildResume></BuildResume> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<PrivateRoute />}>
            <Route path="/Dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
        <Footer></Footer>
      </Router>
      {/* </BuildResume> */}
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
