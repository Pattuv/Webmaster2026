
import Card from "./Card";

function References() {
  return (
    <div className="pt-30 min-h-[calc(100vh)] py-16 px-12 sm:px-16 md:px-24 lg:px-40 xl:px-56 2xl:px-72 3xl:px-96">
      <h1 className="text-3xl font-semibold libre ] mb-4">References</h1>
      <p className="poppins text-gray-700">
        This iare the official reference documents for this website. As the website is still under construction, these documents may not be correctly linked yet.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <Card
    href=""
    badge="PDF"
    title="Works Cited"
    description="Full MLA formatted citation list for all assets."
  />
  <Card
    href=""
    badge="PDF"
    title="Copyright Checklist"
    description="TSA required form stating copyright terms."
  />
  <Card
    href=""
    badge="PDF"
    title="Plan of Work Log"
    description="TSA required work log for team work distribution."
  />
</div>
        <footer className="py-8 text-center text-sm text-gray-500 poppins">
    © 2026 Crossroads Suwanee. All rights reserved.
  </footer>
    </div>
  );
}

export default References;
