import "./App.scss";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import LandingPage from "./Landing/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserPage from "./UserPage/UserPage";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/UserPage/:id" element={<UserPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
