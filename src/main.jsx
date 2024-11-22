import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./ui/NavBar.jsx";
import PoolOfRadiance from "./poolofradiance/PoolOfRadiance.jsx";
import AzureBonds from "./azurebonds/AzureBonds.jsx";
import SilverBlades from "./silverblades/SilverBlades.jsx";
import PoolsOfDarkness from "./poolsofdarkness/PoolsOfDarkness.jsx";
import About from "./about/About.jsx";
import BinaryTool from "./binarytool/BinaryTool.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    {/* <App /> */}
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/poolofradiance/" element={<PoolOfRadiance />} />
        <Route path="/azurebonds/" element={<AzureBonds />} />
        <Route path="/silverblades/" element={<SilverBlades />} />
        <Route path="/poolsofdarkness/" element={<PoolsOfDarkness />} />
        <Route path="/binarytool/" element={<BinaryTool />} />
        <Route path="/about/" element={<About />} />
        <Route path="/" element={<App />} />
      </Routes>
  </BrowserRouter>
);
