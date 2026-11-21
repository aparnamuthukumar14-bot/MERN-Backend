

import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Portal from "../Pages/Portals";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import ForgotPassword from "../Pages/ForgotPassword";
import Contact from "../Pages/Contact";
import FAQ from "../Pages/FAQ";
import Terms from "../Pages/Terms";
import Privacy from "../Pages/Privacy";
import QuickEnquiry from "../Components/QuickEnquiry";
import ScrollToTop from "../Components/ScrollToTop";
function AppLayout() {

  const location = useLocation();

  // Hide navbar and footer on authentication pages
  const hideLayout = [
    "/login",
    "/signup",
    "/forgot-password"
  ].includes(location.pathname);

  return (
    <>
    <ScrollToTop />
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portal" element={<Portal />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>

      {!hideLayout && (
        <>
          <QuickEnquiry />
          <Footer />
        </>
      )}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
