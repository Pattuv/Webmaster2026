function Card({ href = "#", image, title, subtitle }) {
  return (
    <div className="hover-3d my-12 mx-2 cursor-pointer">
      <div
        className="relative overflow-hidden rounded-xl p-5 shadow-sm text-white bg-cover bg-center h-40 md:h-72 lg:h-80 flex items-end"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black/35"></div>
        <div className="relative z-10">
          <h3 className="font-semibold poppins mb-1">{title}</h3>
          <p className="text-sm poppins text-white/90">{subtitle}</p>
        </div>
      </div>

      {/* 8 empty divs needed for the 3D hover effect */}
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Card;
