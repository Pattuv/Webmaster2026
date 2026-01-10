function Card({ href = "#", badge = "PDF", title = "Works Cited", description = "Full MLA formatted citation list for all assets." }) {
  return (
    <a href={href} className="hover-3d my-12 mx-2 cursor-pointer">
      {/* content */}
      <div className="card w-auto h-40 bg-[var(--accent)] text-white bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em]">
        <div className="card-body gap-0 leading-tight">
          <span className="badge bg-[var(--accent)] mb-2 text-white text-xs">
            <i className="bi bi-file-earmark-pdf-fill"></i>{badge}
          </span>
          <p className="text-lg poppins m-0">{title}</p>
          <p className="poppins m-0">{description}</p>
        </div>
      </div>

      {/* 8 empty divs needed for the 3D effect */}
      <div></div><div></div><div></div><div></div>
      <div></div><div></div><div></div><div></div>
    </a>
  );
}

export default Card;