import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import UserInfoEntries from "./components/UserInfoEntries";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Signup from "./components/Signup";
import Resume from "./components/Resume";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route element={<PrivateRoute />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route
                            path="/buildresume/:detailid"
                            element={<UserInfoEntries />}
                        />
                        <Route path="/resume" element={<Resume />} />
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
