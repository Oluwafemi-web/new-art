import { useEffect, useState, useContext } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import "./css/bootstrap.min.css";
import "./css/fancybox.min.css";
import "./css/odometer.min.css";

import "./css/style.css";

// Import UI Elements

import Footer from "./components/UI/Footer";
import NavBar from "./components/UI/navbar";
import MobileNav from "./components/UI/MobileNav";
import Preloader from "./components/UI/Preloader";

// Import Page Elements
import Home from "./components/Pages/Home";
import Visit from "./components/Pages/Visit";
import Exihibitions from "./components/Pages/Exihibitions";
import Collections from "./components/Pages/Collections";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Register from "./components/Pages/Register";
import SanityProvider from "./components/Context/SanityProvider";
import LanguageProvider from "./components/Context/languageProvider";
import LanguageContext from "./components/Context/language-context";
import SanityContext from "./components/Context/sanity-context";
import Collections2023 from "./components/Pages/Collection2023";
import Collections2013 from "./components/Pages/Colletion2013";
import PrimaDel2009 from "./components/Pages/PrrimaDel2009";

function Body() {
  const [navOpen, setNavOpen] = useState(false);
  const [preloader, setPreloader] = useState(true);
  const [hover, setHover] = useState(false);

  const location = useLocation();
  const languageCtx = useContext(LanguageContext);

  function enClicked() {
    languageCtx.changeLanguage("en");
  }
  function itClicked() {
    languageCtx.changeLanguage("it");
  }
  useEffect(() => {
    setPreloader(true);
    setNavOpen(false);
    setHover(false); // Show preloader when navigating to a new page
  }, [location.pathname]);

  const sanityCtx = useContext(SanityContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPreloader(false);
      console.log("changed");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [preloader]);

  const clickeventHandler = () => {
    setNavOpen(!navOpen);
  };
  const hoverventHandler = () => {
    setHover(true);
  };
  const hoverleaveHandler = () => {
    setHover(false);
  };
  const linkEventHandler = () => {
    setPreloader(true);
  };

  var active = "active";
  if (navOpen !== true) {
    active = "";
  }

  return (
    <>
      {preloader ? ( // Conditionally render the Preloader
        <Preloader />
      ) : (
        <div className=" smooth-scroll page-loaded">
          <div className="section-wrapper" data-scroll>
            {navOpen && <MobileNav active={active} />}
            <NavBar
              clickeventHandler={clickeventHandler}
              enClicked={enClicked}
              itClicked={itClicked}
              active={active}
              hovered={hover ? "element-hovered" : ""}
              showDropDown={hoverventHandler}
              hideDropDown={hoverleaveHandler}
              setPreloader={linkEventHandler}
            />
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/visit" element={<Visit />} />
              <Route path="/exhibition" element={<Exihibitions />} />
              <Route path="/collection" element={<Collections />} />
              <Route path="/collection2023" element={<Collections2023 />} />
              <Route path="/collection2013" element={<Collections2013 />} />
              <Route path="/primadel2009" element={<PrimaDel2009 />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/membership" element={<Register />} />
            </Routes>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <SanityProvider>
          <Body />
        </SanityProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}
export default App;
