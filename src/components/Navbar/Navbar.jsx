import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { FlipButton } from "../FlipButton/FlipButton";

function Navbar() {
  const [showBorder, setShowBorder] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // If hero is NOT visible → show border
        setShowBorder(!entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed top-0 w-full z-50">
      <div
        className={`
          navbar bg-[var(--main)] h-20 p-10 px-12 sm:px-16 md:px-24 lg:px-40 xl:px-56 2xl:px-72 3xl:px-96 mx-auto max-w-[2560px]
          transition-colors duration-300 flex items-center justify-between
          ${
            showBorder
              ? "border-b border-[var(--accent)]"
              : "border-b border-transparent"
          }
        `}
      >
        <div className="flex items-center gap-4">
          <a className="inline-flex items-center text-xl" href="/">
            <img
              className="w-auto h-20"
              src={logo}
              alt="Crossroads Suwanee Logo"
            />
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a href="/resources">
            <FlipButton
              frontText="Resources"
              backText={<i className="bi bi-arrow-up-right"></i>}
              className="btn btn-ghost"
              frontClassName="bg-[var(--main)] text-[var(--accent)] border border-[var(--accent)]"
              backClassName="bg-[var(--accent)] text-white border-none"
            />
          </a>
          <a href="/references">
            <FlipButton
              frontText="References"
              backText={<i className="bi bi-arrow-up-right"></i>}
              className="btn btn-ghost"
              frontClassName="bg-[var(--main)] text-[var(--accent)] border border-[var(--accent)]"
              backClassName="bg-[var(--accent)] text-white border-none"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
