import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <a href="#">
        <button className="nav-button">
          <span className="material-icons"> keyboard_arrow_left </span>
        </button>
      </a>
      <h4>Playlist - Moody</h4>
      <div>
        <i className="material-icons">more_vert</i>
      </div>
    </nav>
  );
}
export default Navbar;
