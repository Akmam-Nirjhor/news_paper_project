import { NavLink, Link } from "react-router-dom";
import userDefaultPicture from "../../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logout, loading } = useContext(AuthContext);

  const handleSignOut = () => {
    logout()
      .then(() => {
        console.log("User logged out successfully");
      })
      .catch((error) => {
        console.error("Failed to log out:", error);
      });
  };

  const navbarLinks = (
    <div className="flex gap-8">
      <li>
        <NavLink className="font-bold text-base" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="font-bold text-base" to="/about">
          About
        </NavLink>
      </li>
    </div>
  );

  return (
    <div className="navbar fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navbarLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navbarLinks}</ul>
      </div>
      <div className="navbar-end flex items-center gap-4">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img alt="User avatar" src={user?.photoURL || userDefaultPicture} />
          </div>
        </div>
        {!loading && user ? (
          <button onClick={handleSignOut} className="btn">
            Logout
          </button>
        ) : (
          !loading && (
            <Link to="/login" className="btn">
              Login
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default Navbar;
