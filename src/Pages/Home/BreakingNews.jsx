import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
  return (
    <div className="flex mt-2 mb-2  p-2 ">
      <button className="btn w-32 -h-2  text-xs md:btn btn-secondary">
        Breaking News
      </button>
      <Marquee
        pauseOnHover={true}
        speed={40}
        className="text-blue-900 text-xs md:text-sm   "
      >
        <Link to="/">
          {" "}
          Global temperatures projected to break records; extreme Atlantic
          hurricane season..
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
