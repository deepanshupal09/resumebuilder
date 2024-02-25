import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Footer from "./components/Footer";
import BuildResume from "./components/BuildResume";
import UserInfoEntries from "./components/UserInfoEntries";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./PrivateRoute";

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
          <Route element={<PrivateRoute />}>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/UserInfoEntries" element={<UserInfoEntries />} />
            <Route path="/BuildResume" element={<BuildResume />} />
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
