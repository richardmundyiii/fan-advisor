import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import "./NavBar.css";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <>
      <nav className="navbar">
        <Link className="nav-link" to="/">
          My Profile
        </Link>
        &nbsp; | &nbsp;
        <Link className="nav-link" to="/stadiums">
          Stadiums
        </Link>
        &nbsp; | &nbsp;
        {user && <span>Welcome, {user.name}</span>}
        &nbsp;&nbsp;
        <button>
          <Link className="nav-link" to="/" onClick={handleLogOut}>
            Log Out
          </Link>{" "}
        </button>
      </nav>
    </>
  );
}
