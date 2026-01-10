import Card from "../References/Card";

function Resources() {
  return (
    <div className="pt-30 min-h-[calc(100vh)] py-16 px-12 sm:px-16 md:px-24 lg:px-40 xl:px-56 2xl:px-72 3xl:px-96">
      <h1 className="text-3xl font-semibold libre ] mb-4">Resources</h1>
      <p className="poppins text-gray-700 mb-5">Coming soon!</p>
      <label className="input">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input type="search" required placeholder="Filter" />
      </label>
    </div>
  );
}

export default Resources;
