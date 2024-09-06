import React from "react";
import Header from "../Shared/Header/Header";
import { NavLink } from "react-router-dom";
import img from "../Newpic3/image/lpz.jpg";
import img1 from "../../Pages/Newpic3/image/JPZ.avif";
import img2 from "../../Pages/Newpic3/image/iii2.jpg";
import Navbar from "../Shared/Navbar/Navbar";

const Newpic3 = () => {
  return (
    <div className="min-h-screen">
      <Navbar className="md:hidden" />
      <br />
      <br />
      <br />
      <NavLink to={"/"}>
        <button className="btn bg-red-100 fixed top-4 left-4 z-10 hidden md:block">
          Back
        </button>
      </NavLink>

      {/* Header section */}
      <div>
        <Header />
      </div>

      {/* Content section */}
      <div className="p-5 md:p-10 space-y-9 ">
        <img
          src={img}
          alt="Israel-Iran Conflict"
          className="w-full h-auto md:h-96 object-cover mb-6 rounded-2xl  "
        />

        <p className="md:text-2xl text-xl underline font-semibold text-justify mb-4">
          The Israel-Iran Conflict: A Complex and Ongoing Struggle
        </p>

        <p className="text-sm md:text-base text-justify">
          {/* Content goes here */}
          The Israel-Iran conflict is one of the most complex and enduring
          geopolitical struggles in the Middle East. It stems from deep-rooted
          ideological, political, and strategic differences between the two
          nations. Israel views Iran as a major threat due to its nuclear
          ambitions, support for militant groups like Hezbollah, and anti-Israel
          rhetoric. Iran, in turn, perceives Israel as a hostile actor,
          especially in light of its close relationship with the United States
          and its actions in the Palestinian territories. The conflict
          intensified after the 1979 Iranian Revolution, which established the
          Islamic Republic. Iran adopted a vehemently anti-Israel stance,
          calling for the destruction of the Jewish state. In response, Israel
          has consistently voiced concerns over Iran's influence in the region
          and its nuclear program, fearing that Tehran's acquisition of nuclear
          weapons would destabilize the Middle East. One of the key flashpoints
          in the conflict has been Iran’s support for proxy forces operating
          near Israel’s borders, particularly Hezbollah in Lebanon and militias
          in Syria. This has led to multiple Israeli airstrikes targeting
          Iranian assets in Syria and Lebanon, as Israel aims to limit Iran’s
          military entrenchment near its borders.
          <br />
          <br /> Diplomatic efforts to resolve the conflict, such as
          negotiations around Iran’s nuclear program, have seen limited success.
          The 2015 Joint Comprehensive Plan of Action (JCPOA), which curbed
          Iran’s nuclear activities, offered a brief de-escalation, but its
          subsequent abandonment by the U.S. in 2018 reignited tensions. Despite
          being largely a cold conflict, there are constant fears of escalation
          into full-blown warfare, particularly as both sides engage in covert
          operations, cyber warfare, and military confrontations. The
          Israel-Iran conflict remains a critical issue, with ramifications not
          just for the region but for global security as well.
        </p>
        <div className=" w-full h-auto md:flex md:w-1/2  border-rounder grid grid-cols-1 rounded-full   ">
          <img className="p-3 rounded-3xl" src={img1} alt="" />
          <img className="p-3 rounded-3xl" src={img2} alt="" />
        </div>
        <div>
          <ul className="list-disc pl-5 text-sm md:text-base text-justify space-y-2">
            <li>
              The Israel-Iran conflict is one of the most enduring and complex
              geopolitical struggles in the Middle East.
            </li>
            <li>
              It is deeply rooted in ideological, religious, and political
              differences.
            </li>
            <li>
              Israel views Iran as a significant threat to its existence,
              particularly due to Iran's long-standing support for anti-Israeli
              militant groups such as Hezbollah and Hamas.
            </li>
            <li>
              Iran, on the other hand, perceives Israel as an aggressor and an
              extension of Western imperialism in the region.
            </li>
            <li>
              This animosity has led to decades of indirect conflict,
              characterized by proxy wars, diplomatic clashes, and military
              confrontations.
            </li>
          </ul>
          <br />
          <br />

          <p className="text-sm md:text-base text-justify">
            In conclusion, the Israel-Iran conflict remains a deeply entrenched
            and multifaceted struggle, shaped by decades of ideological,
            political, and religious tensions. Israel views Iran’s support for
            militant groups like Hezbollah and Hamas, along with its nuclear
            ambitions, as direct threats to its security and existence.
            Conversely, Iran perceives Israel as a symbol of Western imperialism
            and a destabilizing force in the region, particularly due to its
            military actions and its close ties with the United States. While
            the conflict is largely characterized by proxy wars and diplomatic
            stand-offs, the risk of escalation into full-scale warfare is
            ever-present. Diplomatic efforts, such as the 2015 Joint
            Comprehensive Plan of Action (JCPOA), offered moments of
            de-escalation but have ultimately failed to bring lasting peace.
            Both nations continue to engage in military and covert operations,
            further heightening tensions. As the conflict persists, its
            implications go beyond the immediate region, with global powers
            being drawn into the struggle, and the potential for wider
            destabilization growing. The Israel-Iran conflict remains one of the
            most critical geopolitical issues, affecting not just regional
            stability, but also global security.
          </p>
        </div>
        <div></div>
      </div>

      {/* Footer spacing */}
      <div className="mb-12" />
    </div>
  );
};

export default Newpic3;
