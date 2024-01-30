import React from "react";
import { Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
function PrivateRouterStaff({ children }) {

  const staffLogin = useSelector((state) => state.staffLogin);
  const { staffInfo, loading, error } = staffLogin;

  const auth = window.localStorage.getItem("staffInfo");
  return staffInfo && staffInfo.isAdmin ? children : <Navigate to="/login" />;
}
export default PrivateRouterStaff;
