import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/scrollToTop";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import ChildProfile from "./Pages/ChildProfile";
import Enrollments from "./Pages/Enrollments";
import EnrollmentProfile from "./Pages/EnrollmentProfile";
import Parents from "./Pages/Parents";
import ParentProfile from "./Pages/ParentProfile";
import Staff from "./Pages/Staff";
import AttendanceHistory from "./Pages/AttendanceHistory";
import StaffLogin from "./Pages/Login/StaffLogin";
import PrivateRouterStaff from "./Components/PrivateRouterStaff";
import Admin from "./Pages/Admin";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <PrivateRouterStaff>
                    <Home />
                  </PrivateRouterStaff>
                }
              />
              <Route
                path="/childprofile/:id"
                element={
                  <PrivateRouterStaff>
                    <ChildProfile />
                  </PrivateRouterStaff>
                }
              />
              <Route
                path="/admission"
                element={
                  <PrivateRouterStaff>
                    <Enrollments />
                  </PrivateRouterStaff>
                }
              />
              <Route
                path="/admission/:id"
                element={
                  <PrivateRouterStaff>
                    <EnrollmentProfile />
                  </PrivateRouterStaff>
                }
              />
              <Route
                path="/parent"
                element={
                  <PrivateRouterStaff>
                    <Parents />
                  </PrivateRouterStaff>
                }
              />
              <Route
                path="/parent/:id"
                element={
                  <PrivateRouterStaff>
                    <ParentProfile />
                  </PrivateRouterStaff>
                }
              />
              <Route
                path="/staff"
                element={
                  <PrivateRouterStaff>
                    <Staff />
                  </PrivateRouterStaff>
                }
              />
              <Route
                path="/admin"
                element={
                  <PrivateRouterStaff>
                    <Admin />
                  </PrivateRouterStaff>
                }
              />
              <Route
                path="/attendance/:id"
                element={
                  <PrivateRouterStaff>
                    <AttendanceHistory />
                  </PrivateRouterStaff>
                }
              />
            </Route>
            <Route path="/login" element={<StaffLogin />} />
            {/* <Route path="/landing" element={<Landing />} /> */}

            {/* <Route path="/register" element={<Register />} /> */}
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
