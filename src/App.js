import "./index.css";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Shop from "./components/Shop";
import Commissions from "./components/Commissions";
import Images from "./images/index";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import logo from "./images/logo/logo.jpg";
import logodark from "./images/logo/logo2.png";
import instagramlogo from "./images/logo/instagram2.png";
import facebooklogo from "./images/logo/facebook.png";
import youtubelogo from "./images/logo/youtube.png";
import maillogo from "./images/logo/mail.png";
import about from "./images/logo/about.jpg";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar logo={logo} />
        <Routes>
          <Route exact path="/" element={<Home paintings={Images} />} />
          <Route path="/gallery" element={<Gallery paintings={Images} />} />
          <Route path="shop" element={<Shop paintings={Images} />} />
          <Route path="commissions" element={<Commissions paintings={Images} />} />
          <Route path="about" element={<About about={about} />} />
        </Routes>
      </BrowserRouter>
      <Footer
        logodark={logodark}
        instagramlogo={instagramlogo}
        facebooklogo={facebooklogo}
        youtubelogo={youtubelogo}
        maillogo={maillogo}
      />
    </div>
  );
}

export default App;
