function Sidebar() {
  function toggleDisplay(e) {
    document.querySelectorAll(".section").forEach((section) => {
      if (e.target.innerText === section.getAttribute("id")) {
        section.classList.remove("hidden");
      } else {
        section.classList.add("hidden");
      }
    });
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.remove("nav-link-active");
    });
    e.target.classList.add("nav-link-active");
    // console.log(typeof e.target.innerText);
  }

  return (
    <nav className="sidebar">
      <h1 className="nav-header">
        <span className="nav-header-span">Dev</span>challenges.io
      </h1>
      <div className="nav-links">
        <a href="#0" className="nav-link" onClick={toggleDisplay}>
          Colors
        </a>
        <a href="#0" className="nav-link" onClick={toggleDisplay}>
          Typography
        </a>
        <a href="#0" className="nav-link" onClick={toggleDisplay}>
          Spaces
        </a>
        <a href="#0" className="nav-link " onClick={toggleDisplay}>
          Buttons
        </a>
        <a
          href="#0"
          className="nav-link nav-link-active "
          onClick={toggleDisplay}
        >
          Inputs
        </a>
        <a href="#0" className="nav-link" onClick={toggleDisplay}>
          Grids
        </a>
      </div>
    </nav>
  );
}

export default Sidebar;
