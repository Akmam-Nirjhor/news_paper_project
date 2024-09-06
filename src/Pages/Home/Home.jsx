import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import BreakingNews from "./BreakingNews";
import img from "../Home/img/gfd-1692459885.jpg";
import img2 from "./img/0.07199000_1604909036_nigeria.jpg";

import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="= p-2 md:p-4 lg:p-6">
      <Navbar />
      <br />
      <br />
      <Header />
      <BreakingNews />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        <div className="border-2">
          <LeftSideNav />
        </div>

        <div className="lg:col-span-2 border-2">
          <div className="space-y-10 p-2 md:p-4">
            <NavLink to={"Details1"}>
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl text-center font-bold">
                  Nine Army soldiers dead, one injured after their vehicle
                  plunges into deep gorge in Ladakh – India TV
                </h2>
                <img className="w-full h-auto mx-auto" src={img} alt="News" />
                <p className="text-sm md:text-base text-center md:text-left">
                  In a tragic incident, at least nine Indian Army soldiers lost
                  their lives and one sustained injury after their vehicle
                  plunged into a deep gorge in Ladakh on Saturday. According to
                  officials, the incident occurred at least seven kilometres
                  short of Kyari town. The deceased also include two Junior
                  Commissioned Officers. (JCOs). The injured soldier has been
                  admitted to a hospital. In a tragic incident...
                </p>
                <div className="flex justify-between items-center">
                  <NavLink to={"Details1"}>
                    <span className="text-xs md:text-sm text-red-700 hover:underline">
                      More Read...
                    </span>
                  </NavLink>
                  <div className="rating size-16 md:size-20">
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
              </div>
            </NavLink>

            <NavLink to={"new"}>
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl text-center font-bold">
                  There are reports that Nigerian soldiers have shot at students
                  protesting over the lack of military protection.
                </h2>
                <img className="w-full h-auto mx-auto" src={img2} alt="News" />
                <p className="text-sm md:text-base text-center md:text-left">
                  The Nigerian authorities have acknowledged that two students
                  were shot by security forces but claim they were hit by stray
                  bullets. They say the army opened fire during what they
                  describe as ‘emotional protests’. Other sources say more
                  students were wounded. They accuse the army of twice opening
                  fire on civilian protesters in the space of a week. In an
                  unfolding situation with conflicting accounts...
                </p>
                <div className="flex justify-between items-center">
                  <NavLink to={"new"}>
                    <span className="text-xs md:text-sm text-red-700 hover:underline">
                      More Read...
                    </span>
                  </NavLink>
                  <div className="rating size-16 md:size-20">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
        </div>

        <div className="border-2">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
