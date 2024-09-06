import { useContext, useState } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [userLoginError, setUserLoginError] = useState();
  const [userLoginSuccess, setUserLoginSuccess] = useState();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    setUserLoginError("");
    setUserLoginSuccess("");

    if (password.length < 6) {
      setUserLoginError("Password should be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setUserLoginError("Password should be uppercase");
      return;
    } else if (!/[a-z]/.test(password)) {
      setUserLoginError("Password should be lowercase");
      return;
    } else if (!/[0-9]/.test(password)) {
      setUserLoginError("Password should contain at least one number");
      return;
    } else if (!/[^a-zA-Z0-9]/.test(password)) {
      setUserLoginError(
        "Your Password should contain at least one special character"
      );
      return;
    }

    console.log(name, photo, email, password);

    // Create User
    createUser(email, password)
      .then((result) => {
        console.log(result);
        setUserLoginSuccess("Successfully Registered");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          console.error("Already used");
          setUserLoginError("This email is already used");
        } else {
          console.error(error);
          setUserLoginError(error.message);
        }
      });
  };

  // Google Sign-In
  const handleGoogleSignIn = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUserLoginSuccess("Successfully Logged in with Google");
      })
      .catch((error) => {
        console.error(error);
        setUserLoginError(error.message);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="text p-4">
        <h2 className="text-2xl sm:text-3xl my-6 sm:my-10 text-center">
          Please Register
        </h2>

        <form
          onSubmit={handleRegister}
          className="w-full max-w-sm sm:max-w-md md:max-w-3/4 lg:max-w-1/2 mx-auto"
        >
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
              name="name"
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="url"
              placeholder="Photo URL"
              className="input input-bordered"
              name="photo"
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered"
              required
              name="email"
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
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
            <button className="btn btn-primary w-full sm:w-auto">
              Register
            </button>
          </div>
        </form>

        <div className="form-control mt-4">
          <button
            className="btn btn-secondary w-full sm:w-auto"
            onClick={handleGoogleSignIn}
          >
            Sign in with Google
          </button>
        </div>

        {userLoginError && (
          <p className="text-red-900 font-semibold text-center mt-4">
            {userLoginError}
          </p>
        )}
        {userLoginSuccess && (
          <p className="text-green-900 font-semibold text-center mt-4">
            {userLoginSuccess}
          </p>
        )}

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
