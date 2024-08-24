import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import BlogerProfileView from "./components/BloggerProfileView";
import BlogDetailedView from "./components/BlogDetailedView";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div className="p-0 m-0 mainColorsAndFont">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/contact_us" element={<ContactUs />} />
          <Route path="/posts/:id" element={<BlogDetailedView />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/bloger_profile" element={<BlogerProfileView />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
