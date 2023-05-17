import "./App.scss";
import Footer from "./Footer/Footer";
import LandingPage from "./Landing/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserPage from "./UserPage/UserPage";
function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/UserPage/:id" element={<UserPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
