import React from "react";
import Header from "../Shared/Header/Header";
import { NavLink } from "react-router-dom";
import img1 from "../../Pages/PICNEW4/img/images (4).jpg";
import img2 from "../../Pages/PICNEW4/img/images (5).jpg";
import img3 from "../../Pages/PICNEW4/img/images (6).jpg";
import Navbar from "../Shared/Navbar/Navbar";
const Picnews1 = () => {
  return (
    <div className="p-4">
      <div>
        <Navbar></Navbar>
      </div>
      <br />
      <br />

      <NavLink to={"/"}>
        <button className="btn bg-red-100 fixed top-4 left-4 z-10 hidden md:block">
          Back
        </button>
      </NavLink>

      <div>
        <Header />
      </div>

      <div className="p-5">
        <p className="text-xl md:text-3xl underline font-semibold text-justify"></p>
        <br />
        <div className="md:flex grid  justify-between gap-2 p-2">
          <img
            src={img1}
            alt=""
            className="w-full md:w-1/3 rounded-lg shadow-lg"
          />
          <img
            src={img2}
            alt=""
            className="w-full md:w-1/3 rounded-lg shadow-lg"
          />
          <img
            src={img3}
            alt=""
            className="w-full md:w-1/3 rounded-lg shadow-lg"
          />
        </div>
        <br />

        <p className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Key Development</th>
                <th className="py-2 px-4 border-b">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">
                  Enhanced Emergency Response
                </td>
                <td className="py-2 px-4 border-b">
                  The severe storms have prompted a significant ramp-up in
                  emergency response efforts. Local authorities, along with
                  national and international aid organizations, have been
                  mobilized to address the immediate needs of affected
                  communities.
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">
                  International Aid and Support
                </td>
                <td className="py-2 px-4 border-b">
                  In response to the widespread damage caused by the storms,
                  there has been a notable increase in international aid.
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">
                  Long-Term Recovery and Infrastructure Rebuilding
                </td>
                <td className="py-2 px-4 border-b">
                  Here are three key developments related to the severe storms
                  in southern Australia: 1. Enhanced Emergency Response Efforts
                  The severe storms have prompted a significant ramp-up in
                  emergency response efforts. Local authorities, along with
                  national and international aid organizations, have been
                  mobilized to address the immediate needs of affected
                  communities. This includes setting up emergency shelters,
                  providing medical assistance, and coordinating search and
                  rescue operations. The Australian government has also
                  increased funding for relief efforts and infrastructure
                  repair, demonstrating a robust response to the crisis. This
                  heightened response underscores the importance of quick,
                  coordinated action in mitigating the impact of natural
                  disasters. efforts.
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">
                  Environmental and Wildlife Impact
                </td>
                <td className="py-2 px-4 border-b">
                  The severe storms have had a significant impact on the
                  environment and local wildlife. Flooding and landslides have
                  caused substantial damage to natural habitats, affecting plant
                  and animal life. Rivers and wetlands have been altered,
                  leading to disruptions in ecosystems and challenges for local
                  wildlife, which may face habitat loss and changes in food
                  sources.
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <div className="container mx-auto p-4">
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">
                Effects on Agriculture
              </h2>
              <p className="mb-4">
                Agricultural sectors in southern Australia have faced severe
                repercussions from recent storms. Flooding has inundated
                farmland, causing crop damage and soil erosion. The heavy rains
                have also delayed planting and harvesting schedules, impacting
                both yield and quality. Livestock have been affected by the
                flooding, with some animals at risk due to submerged grazing
                areas. The storms have exacerbated existing challenges in the
                agricultural sector, highlighting the need for improved flood
                management and resilient farming practices to mitigate future
                risks.
                <ul className="list-disc list-inside p-4 space-y-2">
                  <li>
                    The severe storms in southern Australia have triggered a
                    substantial emergency response, mobilizing local authorities
                    and volunteers to assist affected communities.
                  </li>
                  <li>
                    Increased international aid is being coordinated to support
                    affected areas.
                  </li>
                  <li>
                    Many homes and businesses have sustained significant damage
                    from the storms.
                  </li>
                  <li>
                    Authorities have issued evacuation orders for the most
                    impacted regions.
                  </li>
                  <li>
                    Search and rescue operations are ongoing to find missing
                    individuals.
                  </li>
                  <li>
                    Emergency shelters have been established to provide
                    temporary housing for displaced residents.
                  </li>
                  <li>
                    Power outages have been reported in several areas,
                    complicating relief efforts.
                  </li>
                  <li>
                    The Australian government is providing financial assistance
                    to those affected by the disaster.
                  </li>
                  <li>
                    Environmental damage, including flooding and landslides, has
                    affected local wildlife.
                  </li>
                  <li>
                    Long-term recovery plans are being developed to rebuild
                    infrastructure and support communities.
                  </li>
                </ul>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">
                Emergency Response and Community Impact
              </h2>
              <p className="mb-4">
                The storms have prompted a large-scale emergency response, with
                local authorities and volunteers mobilizing to assist affected
                communities. Evacuation orders were issued in high-risk areas,
                and temporary shelters have been set up for displaced residents.
                Emergency services have worked tirelessly to restore power,
                clear debris, and provide medical aid. The community's
                resilience has been tested, with many facing temporary
                displacement and significant property damage. Support from
                government agencies, non-profits, and neighboring regions has
                been crucial in helping communities recover and rebuild.
              </p>
              <p className="mb-4">
                In addition to changes in distribution, the production of films
                has also evolved. Advances in digital filmmaking technologies,
              </p>
              <p className="mb-4">
                Another significant trend in the film industry is the rising
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">
                Impact on Infrastructure
              </h2>
              <p className="mb-4">
                Severe storms in southern Australia have caused significant
                damage to infrastructure, including roads, bridges, and public
                buildings. Intense winds and heavy rainfall have led to
                flooding, undermining the structural integrity of critical
                transport links and utility services. The damage has disrupted
                daily life and commerce, with repairs expected to take weeks or
                even months. Emergency services have been stretched thin,
                addressing immediate needs while assessing long-term impacts.
                The financial burden of reconstruction and maintenance is
                substantial, placing pressure on local and state government
                budgets.
              </p>
              <p className="mb-4">
                A key driver of the gaming industry's growth is the rise of
                esports, which has transformed competitive gaming into a global
                phenomenon. Esports tournaments, featuring popular games such as
                "League of Legends," "Dota 2," and "Fortnite," draw millions of
                viewers worldwide, with prize pools reaching substantial
                amounts. The esports sector has also attracted significant
                investments from traditional sports teams, celebrities, and
                brands, further solidifying its position within the
                entertainment ecosystem.
              </p>
              <p>
                Severe Storms in Southern Australia Severe storms in southern
                Australia have left a profound impact on infrastructure,
                agriculture, and communities. The intense weather has severely
                damaged roads, bridges, and public buildings, leading to
                extensive flooding that compromises critical transport links and
                utility services. This infrastructure damage has disrupted daily
                life and commerce, with repair efforts expected to be lengthy
                and costly. The agricultural sector has also suffered, as
                flooding has damaged crops, eroded soil, and delayed planting
                and harvesting. Livestock has been affected, and the storms have
                intensified existing challenges in farming. In response,
                emergency services have been stretched thin, mobilizing quickly
                to assist affected communities through evacuations, temporary
                shelters, and restoration efforts. The resilience of local
                communities is being tested, but with support from government
                agencies and volunteers, recovery and rebuilding efforts are
                underway. The situation highlights the urgent need for improved
                flood management and resilient infrastructure to better
                withstand future storms.
              </p>
            </section>
          </div>
        </p>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Picnews1;
