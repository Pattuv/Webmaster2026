import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import References from "./components/References/References.jsx";
import Resources from "./components/Resources/Resources.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/references" element={<References />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
