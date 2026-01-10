import { useState, useEffect } from "react";
import "./hero.css";
import Gallery from "../Gallery/Gallery.jsx";

function Hero() {
  const [showGallery, setShowGallery] = useState(true);

  useEffect(() => {
    const handleResize = () => setShowGallery(window.innerWidth > 768);
    window.addEventListener("resize", handleResize);
    handleResize(); // set initial state
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="hero-container" id="hero">
      {showGallery && <Gallery />}
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
        <button className="btn btn-outline">View Resources</button>
      </div>
    </div>
  );
}

export default Hero;
