import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav id="sticky">
      <div id="logo">
        <Link to="/">
          <h3>portofolio.</h3>
        </Link>
      </div>
      <ul id="page">
        <li class="active">
          <Link to="/">Home</Link>
        </li>
        <li class="active">
          <Link to="/About">About</Link>
        </li>
        <li class="active">
          <Link to="/Skills">Skills</Link>
        </li>
        <li class="active">
          <Link to="/Blogs">Blog</Link>
        </li>
      </ul>
      <div id="profile">
        <h4 id="nameProfile">
          Holaaa,<i> Everyone</i>
        </h4>
        <div id="iconProfile"></div>
      </div>
    </nav>
  );
}

export default Navbar;
