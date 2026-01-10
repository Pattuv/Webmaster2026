import { useState, useEffect } from "react";
import "./hero.css";
import Gallery from "../Gallery/Gallery.jsx";

// Import your 5 images
import img1 from "./Gallery/1.png";
import img2 from "./Gallery/2.png";
import img3 from "./Gallery/3.png";
import img4 from "./Gallery/4.png";
import img5 from "./Gallery/5.png";

function Hero() {
  const [showGallery, setShowGallery] = useState(true);

  useEffect(() => {
    const handleResize = () => setShowGallery(window.innerWidth > 768);
    window.addEventListener("resize", handleResize);
    handleResize(); // initial state
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="hero-container" id="hero">
      {showGallery && (
        <Gallery img1={img1} img2={img2} img3={img3} img4={img4} img5={img5} />
      )}
      <h1 className="libre">
        Your gateway to tools, events, and connections that enrich life in
        Suwanee.
      </h1>
      <h3 className="poppins">
        Access hundreds of quality resources for any individual regardless of
        background via Suwanee’s most robust community hub.
      </h3>
      <div className="button">
        <a href="#manifesto">
          <button className="btn btn-neutral">Our Mission</button>
        </a>
        <a href="/resources">
          <button className="btn btn-outline">View Resources</button>
        </a>
      </div>
    </div>
  );
}

export default Hero;
