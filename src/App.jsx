import LandingPage from "./components/pages/LandingPage";
import Login from "./components/pages/Login";
import UserInfoEntries from "./components/pages/UserInfoEntries";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Signup from "./components/pages/Signup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { getCookie } from "./cookies";
import NotFound from "./components/pages/Notfound";

function App() {

    const [user, setUser] = useState(null);
    useEffect(() => {
        if (getCookie("auth")) {
            console.log(getCookie("auth"));
            setUser(JSON.parse(getCookie("auth")));
        }
    }, []);

    return (
        <>
            <Router>
                <Navbar user={user} setUser={setUser} />
                <Routes>
                    <Route path="/" element={<LandingPage user={user} />} />
                        <Route path="/login" element={<Login user={user} setUser={setUser} />} />
                        <Route path="/signup" element={<Signup user={user} setUser={setUser} />} />


                    <Route element={<PrivateRoute />}>
                        <Route path="/dashboard" element={<Dashboard user={user} />} />
                        <Route
                            path="/buildresume/:detailid/:templateid"
                            element={<UserInfoEntries user={user} />}
                        />
                    </Route>
                    <Route element={<NotFound />} path="*" />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;
