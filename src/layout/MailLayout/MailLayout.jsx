import { Outlet } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";

const MailLayout = () => {
  return (
    <div>
      <Navbar></Navbar>

      <Outlet></Outlet>

      <h2>Footer</h2>
    </div>
  );
};

export default MailLayout;
