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

const currentDate = new Date();
let currentYear = currentDate.getFullYear();

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
        <h1 className="hidden">Dungeons and Dragons Forgotten Realms Gold Box PC Video games character editor. Hack edit cheat saved games for Pool of Radiance, Curse of the Azure Bonds, Secret of the Silver Blades, Pools of Darkness. Forgotten Realms, Dungeons and Dragons, Advanced Dungeons and Dragons, gold box games.</h1>

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
      <div className="text-center mt-10 mb-20">
        <p className="text-lg mb-5">Are you a fan of Dungeons and Dragons? You might enjoying rolling up a character with our <a href="https://dnd35.robotlions.com" className="text-blue-600 font-semibold">D&D 3.5 Character Creator</a>.</p>
      <p>© {currentYear} by <a href="https://chadmusick.com/" className="text-blue-600 font-semibold
      ">Chad Musick</a></p>
      </div>
  </BrowserRouter>
);
