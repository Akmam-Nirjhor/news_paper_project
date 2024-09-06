import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="text-center space-y-1 md:space-y-2 p-8 md:p-8   ">
      <img className="mx-auto" src={logo} alt="" />
      <p>Journalism Without Fear or Favour</p>
      <p className="">{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
};

export default Header;
