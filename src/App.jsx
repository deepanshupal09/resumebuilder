import LandingPage from "./components/pages/LandingPage";
import Login from "./components/pages/Login";
import UserInfoEntries from "./components/pages/UserInfoEntries";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Signup from "./components/pages/Signup";
import Resume from "./components/Resume2";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Router>
        <Navbar />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route element={<PrivateRoute />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route
                            path="/buildresume/:detailid/:templateid"
                            element={<UserInfoEntries />}
                        />
                        <Route path="/resume" element={<Resume />} />
                    </Route>
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;
