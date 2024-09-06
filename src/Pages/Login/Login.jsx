import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log("Location in the Login page", location);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    signIn(email, password)
      .then((result) => {
        console.log("User logged in:", result.user);
        toast.success("You are logged in!"); // Show success notification
        const redirectPath = location.state?.from?.pathname || "/";
        navigate(redirectPath);
      })
      .catch((error) => {
        console.error("Login error:", error.code, error.message);
        toast.error("Login failed: " + (error.message || "Please try again.")); // Show error notification
      });
  };

  return (
    <div>
      <Navbar />
      <div className="text">
        <h2 className="text-3xl my-10 text-center">This is Login</h2>

        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm sm:max-w-md md:max-w-3/4 lg:max-w-1/2 mx-auto p-4"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
              name="email"
            />
          </div>
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
              name="password"
            />
            <label className="label mt-2">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary w-full sm:w-auto">
              Login
            </button>
          </div>
        </form>

        <p className="text-center mt-4">
          Do not have an account?{" "}
          <Link className="text-blue-600" to="/register">
            Register
          </Link>
        </p>
      </div>
      <ToastContainer /> {/* Add ToastContainer to your component */}
    </div>
  );
};

export default Login;
