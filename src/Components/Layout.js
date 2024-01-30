import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useSelector, useDispatch } from "react-redux";
import SmallSidebar from "./SmallSidebar";

import {
 
  FaBook,

  FaUserAltSlash,
  FaUserAstronaut,
  FaUserCircle,
  FaUserFriends,
  FaUserSecret,

} from "react-icons/fa";

const Layout = () => {
 
  const data = [
    {
      id: "child",
      label: "Children",
      icon: <FaUserSecret />,
      path: "/",
      section: "child",
    },
    {
      id: "admision",
      label: "Enrollments",
      icon: <FaBook />,
      path: "/admission",
      section: "admission",
    },
    {
      id: "parent",
      label: "Parents",
      icon: <FaUserFriends />,
      path: "/parent",
      section: "parent",
    },
    {
      id: "staff",
      label: "Staff",
      icon: <FaUserAltSlash />,
      path: "/staff",
      section: "staff",
    },

    {
      id: "admin",
      label: "Admin",
      icon: <FaUserCircle />,
      path: "/admin",
      section: "admin",
    },

    // Add more details as needed
  ];
    const [activeSection, setActiveSection] = React.useState("child");

    const showSection = (sectionName) => {
      setActiveSection(sectionName);
    };
  const dispatch = useDispatch();
  const setSidebar = useSelector((state) => state.setSidebar);
  const { isSidebarActive } = setSidebar;
  return (
    <div className="d-flex">
      <Sidebar />
      <SmallSidebar
        showSection={showSection}
        data={data}
        activeSection={activeSection}
      />
      <div className={isSidebarActive ? "main" : "full"}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
