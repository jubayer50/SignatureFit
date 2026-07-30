import { NavLink } from "react-router";

const MyNavLink = ({ to, children }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? "font-bold text-indigo-600" : "font-medium"
        }
      >
        {children}
      </NavLink>
    </li>
  );
};

export default MyNavLink;
