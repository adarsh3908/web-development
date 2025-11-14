import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Registration from "./registration";
import Login from "./login";
import Home from "./Home";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}
