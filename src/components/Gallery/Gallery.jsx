import "./Gallery.css";

function Gallery({ img1, img2, img3, img4, img5 }) {
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
          src={img1}
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
          src={img2}
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
          src={img3}
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
          src={img4}
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
          src={img5}
          style={{ color: "transparent" }}
        />
      </div>
    </div>
  );
}

export default Gallery;
