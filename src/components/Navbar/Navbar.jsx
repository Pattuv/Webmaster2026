import logo from "../../assets/logo.png";
import { FlipButton } from "../FlipButton/FlipButton";

function Navbar() {
  return (
    <div className="fixed top-0 w-full z-50">
      <div className="navbar bg-(--main)/30 backdrop-blur-md h-20 p-10 px-12 sm:px-16 md:px-24 lg:px-40 xl:px-56 2xl:px-72 3xl:px-96 mx-auto max-w-[2560px]">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            <img className="w-auto h-20" src={logo} alt="" />
          </a>
        </div>
        <FlipButton
          frontText="References"
          backText={<i className="bi bi-arrow-up-right"></i>}
          className="btn btn-ghost"
          frontClassName="bg-[var(--main)] text-[var(--accent)] border border-[var(--accent)]"
          backClassName="bg-[var(--accent)] text-white border-none"
        />
      </div>
    </div>
  );
}

export default Navbar;
