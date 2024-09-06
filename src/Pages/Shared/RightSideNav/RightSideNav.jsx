import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import qzone from "../../../assets/qZone1.png";
import qzone2 from "../../../assets/qZone2.png";
import qzone3 from "../../../assets/qZone3.png";
import bg from "../../../assets/bg.png";
import app from "../../../firebase/firebase.config";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const RightSideNav = () => {
  const handleGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, googleProvider).then((restul) => {
      const user = restul.user;
      console.log(user);
    });
  };

  const handleGithubSignIn = () => {
    const githubProvider = new GithubAuthProvider();
    const auth = getAuth(app);

    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const gitUser = result.user;
        console.log(gitUser); // Assuming setUser is a state setter function
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="p-4 space-y-3 mb-6  ">
        <h2 className="text-2xl font-semibold">Login With</h2>
        <button onClick={handleGoogle} className="btn btn-outline w-full ">
          <FcGoogle className="text-xl md:text-xl "></FcGoogle> Google
        </button>
        <button
          onClick={handleGithubSignIn}
          className="btn btn-outline w-full "
        >
          <FaGithub className="text-xl md:text-xl "></FaGithub>Github
        </button>
      </div>
      <div className="p-4  mb-6 ">
        <h2 className="text-2xl text-center font-semibold mb-2 ">Find Us</h2>
        <a
          className="flex p-4 items-center gap-2 hover font-semibold border rounded-lg  "
          href=""
        >
          <FaFacebook className="text-xl md:text-xl"></FaFacebook>Facebook
        </a>
        <a
          className="flex p-4 items-center gap-2 hover font-semibold border rounded-lg  "
          href=""
        >
          <BiLogoInstagramAlt className="text-xl md:text-xl">
            Instagram
          </BiLogoInstagramAlt>
          Instagram
        </a>
        <a
          className="flex p-4 items-center gap-2 hover font-semibold border rounded-lg  "
          href=""
        >
          <FaTwitter className="text-xl md:text-xl">Twitter</FaTwitter>Twitter
        </a>
        <div className="mt-4 spa bg-slate-200 p-4 items-center ml-1 ">
          <h2 className="text-2xl font-semibold text-center mb-2 ">Q-zone</h2>
          <img src={qzone} alt="" />
          <img src={qzone2} alt="" />
          <img src={qzone3} alt="" />
        </div>
        {/* Create an amazing News paper */}
        <div
          className="relative flex items-center mt-3 justify-center text-white p-4 rounded-lg hidden md:flex"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "auto",
          }}
        >
          <div className="space-y-2 p-9 mt-4 z-20">
            {" "}
            {/* Ensure content is above the overlay */}
            <p className="relative text-3xl z-20">
              {" "}
              {/* Ensure text is above the overlay */}
              Create an <br />
              Amazing <br />
              NewsPaper
            </p>
            <p className="z-20">
              {" "}
              {/* Ensure text is above the overlay */}
              Discover thousands of options, easy to customize layouts,
              one-click to import demo and much more.
            </p>
            <button className="btn bg-red-800 border-red-500 text-white z-20">
              Learn More
            </button>
          </div>
          <div className="absolute inset-0 bg-black opacity-20 rounded-lg"></div>{" "}
          {/* Overlay */}
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
