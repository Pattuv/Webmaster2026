import "./Gallery.css";

function Gallery() {
  return (
    <div className="my-4 grid grid-flow-col auto-cols-[96px] gap-6 -translate-x-6 grid-rows-1 no-scrollbar justify-start sm:-translate-x-4">
      <div
        className="min-h-32 min-w-32 overflow-hidden rounded-2xl bg-white shadow-lg"
        draggable={false}
        tabIndex={0}
        style={{
          transform: "rotate(4.20946deg)",
          userSelect: "none",
          touchAction: "none",
          opacity: 1,
          zIndex: "auto",
        }}
      >
        <img
          alt="Golden Gate Bridge"
          loading="lazy"
          width={640}
          height={640}
          decoding="async"
          data-nimg="1"
          className="pointer-events-none h-full w-full rounded-2xl object-cover p-1"
          srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIMG_0818.c6837d37.jpg&w=640&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIMG_0818.c6837d37.jpg&w=1920&q=75 2x"
          src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIMG_0818.c6837d37.jpg&w=1920&q=75"
          style={{ color: "transparent" }}
        />
      </div>

      <div
        className="min-h-32 min-w-32 overflow-hidden rounded-2xl bg-white shadow-lg"
        draggable={false}
        tabIndex={0}
        style={{
          transform: "rotate(-3.84841deg)",
          userSelect: "none",
          touchAction: "none",
          opacity: 1,
          zIndex: "auto",
        }}
      >
        <img
          alt="San Diego"
          loading="lazy"
          width={640}
          height={640}
          decoding="async"
          data-nimg="1"
          className="pointer-events-none h-full w-full rounded-2xl object-cover p-1"
          srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIMG_9026.3b726aa2.jpg&w=640&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIMG_9026.3b726aa2.jpg&w=1920&q=75 2x"
          src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIMG_9026.3b726aa2.jpg&w=1920&q=75"
          style={{ color: "transparent" }}
        />
      </div>

      <div
        className="min-h-32 min-w-32 overflow-hidden rounded-2xl bg-white shadow-lg"
        draggable={false}
        tabIndex={0}
        style={{
          transform: "rotate(4.38734deg)",
          userSelect: "none",
          touchAction: "none",
          opacity: 1,
          zIndex: "auto",
        }}
      >
        <img
          alt="Laguna Beach"
          loading="lazy"
          width={640}
          height={640}
          decoding="async"
          data-nimg="1"
          className="pointer-events-none h-full w-full rounded-2xl object-cover p-1"
          srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIMG_7186.a3c670f1.jpg&w=640&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIMG_7186.a3c670f1.jpg&w=1920&q=75 2x"
          src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIMG_7186.a3c670f1.jpg&w=1920&q=75"
          style={{ color: "transparent" }}
        />
      </div>

      <div
        className="min-h-32 min-w-32 overflow-hidden rounded-2xl bg-white shadow-lg"
        draggable={false}
        tabIndex={0}
        style={{
          transform: "rotate(-4.0091deg)",
          userSelect: "none",
          touchAction: "none",
          opacity: 1,
          zIndex: "auto",
        }}
      >
        <img
          alt="Laguna Beach 2"
          loading="lazy"
          width={640}
          height={640}
          decoding="async"
          data-nimg="1"
          className="pointer-events-none h-full w-full rounded-2xl object-cover p-1"
          srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIMG_8145.e6bb206e.jpg&w=640&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIMG_8145.e6bb206e.jpg&w=1920&q=75 2x"
          src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIMG_8145.e6bb206e.jpg&w=1920&q=75"
          style={{ color: "transparent" }}
        />
      </div>

      <div
        className="min-h-32 min-w-32 overflow-hidden rounded-2xl bg-white shadow-lg"
        draggable={false}
        tabIndex={0}
        style={{
          transform: "rotate(4.04582deg)",
          userSelect: "none",
          touchAction: "none",
          opacity: 1,
          zIndex: "auto",
        }}
      >
        <img
          alt="La Jolla"
          loading="lazy"
          width={640}
          height={640}
          decoding="async"
          data-nimg="1"
          className="pointer-events-none h-full w-full rounded-2xl object-cover p-1"
          src="image.png"
          style={{ color: "transparent" }}
        />
      </div>
    </div>
  );
}

export default Gallery;
