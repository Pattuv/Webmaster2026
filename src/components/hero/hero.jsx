import "./hero.css"; 
import Gallery from "../Gallery/Gallery.jsx";

// Change the function name to whatever your component is (Ex: Button, Navbar, etc.)
function hero() {
  return (
    // This is where you write your HTML. When writing remember there can only be one parent html tag in the return().

    <div class="hero-container">
      <Gallery />
      <h1 class="libre">
        Your gateway to tools, events, and connections that enrich life in
        Suwanee.
      </h1>
      <h3 class="Poppins">
        Access hundreds of quality resources for any individual regardless of
        background via Suwanee’s most robust community hub.
      </h3>
      <div class="button">
        <button class="btn btn-neutral">Our Mission</button>
        <button class="btn btn-outline">View Resources</button>
      </div>

    </div>
  );
}

// Copy this too! This allows your component to be used anywhere in the project
export default hero;
