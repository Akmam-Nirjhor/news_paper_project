import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import img2 from "../Home/img/0.07199000_1604909036_nigeria.jpg";
import { NavLink } from "react-router-dom";

const Details2 = () => {
  return (
    <div>
      <div>
        <div>
          <Header></Header>
          <Navbar></Navbar>
        </div>
        <div className="mt-5">
          <NavLink to={"/"}>
            {/* Apply the hidden class to hide the button on small devices (sm) */}
            <button className="btn bg-red-300 fixed top-4 left-4 hidden md:block">
              Back
            </button>
          </NavLink>
        </div>

        <div className="flex justify-center">
          <img
            className="w-[50rem] items-center "
            src={img2}
            alt="description"
          />
        </div>
        <div className="mt-11">
          <p>
            Tragic Incident in Ladakh: Army Soldier Dead, One Injured After
            Vehicle Plunges into Deep Gorge In a devastating accident in Ladakh,
            India, a tragic incident has claimed the life of an Army soldier and
            left another critically injured. The incident occurred when the
            military vehicle they were traveling in plunged into a deep gorge,
            marking a somber moment for the region and the Indian Armed Forces.
            The accident took place early in the morning near the remote area of
            Ladakh, a region known for its challenging terrain and high-altitude
            environment. The vehicle, part of a convoy tasked with patrolling
            and maintaining security in this strategically sensitive region,
            lost control and veered off the road, resulting in a catastrophic
            plunge into the gorge. The exact cause of the accident is still
            under investigation. Initial reports suggest that the treacherous
            road conditions and possibly adverse weather conditions may have
            contributed to the vehicle losing traction and control. The
            high-altitude roads in Ladakh are notorious for their ruggedness,
            and any lapse in concentration or mechanical failure can have dire
            consequences. Emergency response teams were dispatched promptly to
            the scene of the accident.
            <br />
            <br />
            The recovery operation was fraught with difficulties due to the
            steep and challenging terrain of the gorge. Despite the best efforts
            of the rescuers, one soldier was found dead at the scene, while the
            other, who was critically injured, was airlifted to a nearby
            military hospital for urgent medical treatment. The injured
            soldier's condition remains serious, and medical personnel are
            working around the clock to provide the necessary care and
            stabilization. The incident has sent shockwaves through the military
            community, highlighting the inherent risks and sacrifices associated
            with serving in such harsh and perilous conditions. Ladakh, situated
            in the northernmost region of India, is a strategically vital area
            due to its proximity to international borders. The Indian Army has a
            significant presence in the region to safeguard national security
            and manage the challenging logistics of patrolling such a remote and
            rugged landscape. The accident underscores the difficulties faced by
            military personnel stationed in this part of the country, where the
            harsh environment and difficult terrain pose constant challenges.
            The Indian Army has expressed deep sorrow over the loss of their
            comrade and has extended condolences to the family of the deceased
            soldier. The military leadership is also focused on providing full
            support and assistance to the injured soldier and their family
            during this difficult time. In addition to the immediate response,
            there will be a thorough investigation into the circumstances
            leading to the accident.
            <br />
            <br />
            This investigation will aim to determine whether there were any
            lapses in protocol, mechanical issues, or other factors that
            contributed to the tragic event. The findings will be used to
            improve safety measures and prevent similar incidents in the future.
            The incident has also drawn attention from the public and media,
            with many expressing their condolences and appreciation for the
            bravery and dedication of the soldiers serving in such challenging
            conditions. The sacrifice of the fallen soldier and the bravery of
            those who continue to serve in the region are being honored and
            recognized as part of the broader narrative of military service and
            sacrifice. As the investigation continues and the injured soldier
            receives care, the focus remains on ensuring that the necessary
            steps are taken to address the challenges faced by military
            personnel in Ladakh and to honor the memory of the soldier who lost
            their life in this tragic accident.
            <br />
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details2;
