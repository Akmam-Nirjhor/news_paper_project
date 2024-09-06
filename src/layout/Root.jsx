import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";

const Root = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto font-poppins  ">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
