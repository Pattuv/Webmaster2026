import cityhall from "./cityhall.jpg";
import nonprofit from "./nonprofit.avif";
import events from "./events.webp";
import resources from "./resources.jpg";
import volunteering from "./volunteering.jpg";
import community from "./community.png";
import Card from "./Card";

function next() {
  return (
    <div id="manifesto">
      <div
        className="py-16 p-16 text-white rounded-tl-[55px] rounded-tr-[55px] "
        style={{ backgroundColor: "var(--accent)" }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold libre">About Crossroads</h2>
              <p className="opacity-90 poppins text-gray-300">
                We are a community of people who care about each other and our
                town. So, we curated a safe space where you can find all the
                resources you need to make your life in Suwanee easier.
              </p>
              <p className="opacity-90 poppins text-gray-300">
                We ensure to maintain quality and integrity of the information
                we provide. In addition, our values include universal
                inclusivity, so no one has the chance to feel left out.
              </p>
              <p className="opacity-90 poppins text-gray-300">
                The world cannot be fixed all at once, but we believe that a
                better world starts with small, local steps towards peace and
                understanding, and Crossroads Suwanee is just that.
              </p>
            </div>
            <div className="space-y-4">
              <img
                src={cityhall}
                alt="Next"
                className="w-full h-auto rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 p-16 text-black bg-white text-center">
        <div className="container mx-auto px-4">
          <p className="libre text-3xl mt-10 mb-3">
            Find your people. Get involved.
          </p>
          <p className="poppins text-gray-500">
            Our community hub provides access to a variety of local amenities to
            make you feel at home.
          </p>

          {/* 
          grid-cols-1  -> mobile (stacked one at a time)
          sm:grid-cols-2 -> small screens
          md:grid-cols-4 -> desktop
        */}
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <Card
              image={nonprofit}
              title="Non-Profits"
              subtitle="Orgs that provide support and are creating change, without the prospect of money."
            />
            <Card
              href="/resources"
              image={resources}
              title="Resources"
              subtitle="Explore housing, food, and wellness support."
            />

            <Card
              image={events}
              title="Events"
              subtitle="Discover meetups, festivals, and gatherings."
            />

            <Card
              image={volunteering}
              title="Volunteering"
              subtitle="Make a difference in your community."
            />
          </div>
        </div>
      </div>

      <div className="py-16 p-16 text-black bg-white text-center">
        <div className="container mx-auto px-4">
          <p className="libre text-3xl  mb-3">
            Search for your resources in real life.
          </p>
          <p className="poppins text-gray-500 mb-5">
            Find places and directions using our map feature.
          </p>
          <iframe
            width="100%"
            height="400px"
            frameborder="0"
            className="border-none rounded-2xl"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Suwanee%2C%20GA%2C%20USA&maptype=roadmap"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="py-16 p-16 text-black">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl mt-20">
              <img
                src={community}
                alt="Badge"
                className="w-60 h-auto   absolute -top-20 left-1/2 -translate-x-1/2 "
              />
              <div className="bg-white rounded-2xl shadow-xl p-10  w-full text-black text-center">
                <h2 className="text-2xl font-semibold libre ">
                  Join our Newsletter
                </h2>
                <p className="opacity-90 poppins text-gray-600 mb-5">
                  For weekly news, updates, and community events, and more.
                </p>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="w-full space-y-3 text-left"
                >
                  <div>
                    <label
                      htmlFor="newsletter-email"
                      className="block text-sm font-medium text-gray-700 poppins"
                    >
                      Email
                    </label>
                    <input
                      id="newsletter-email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                    />
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <label htmlFor="newsletter-name" className="sr-only">
                        Name (optional)
                      </label>
                      <input
                        id="newsletter-name"
                        type="text"
                        placeholder="Name (optional)"
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="rounded-lg px-5 py-2 font-semibold text-white shadow-sm"
                      style={{ backgroundColor: "var(--accent)" }}
                    >
                      Subscribe
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 poppins text-left">
                    By subscribing, you agree to receive emails from Crossroads
                    Suwanee. You can unsubscribe anytime. *The newsletter doesn't
                    currently work.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="py-8 text-center text-sm text-gray-500 poppins">
        © 2026 Crossroads Suwanee. All rights reserved.
      </footer>
    </div>
  );
}

export default next;
