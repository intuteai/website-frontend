import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import Home from "./pages/Homepage/homepage";
import About from "./pages/Aboutpage/aboutpage";
import Contact from "./pages/Contactpage/contactPage";
import Teampage from "./pages/TeamPage/teampage";
import VisionPage from "./pages/Visionpage/visionpage";
import BlogPage from "./pages/Blogpage/blogpage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Teampage />} />
        <Route path="/vision" element={<VisionPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
