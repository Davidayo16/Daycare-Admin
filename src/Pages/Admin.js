import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStaffDetails } from "../Redux/Actions/UserAction";
import Loading from "../Components/Loading/Loading";
import Error from "../Components/Error/Error";
const Admin = () => {
  const dispatch = useDispatch();
  const staffDetails = useSelector((state) => state.staffDetails);
  const { error, loading, user } = staffDetails;
  React.useEffect(() => {
    dispatch(getStaffDetails());
  }, [dispatch]);

  return (
    <div className="p-4">
      {loading ? (
        <Loading />
      ) : error ? (
        <Error>{error}</Error>
      ) : (
        <div className="staff-profile">
          <div className="profile-details">
            <div className="form-group">
              <label htmlFor="staffName">First Name</label>
              <input
                type="text"
                id="staffName"
                placeholder="Enter staff name"
                value={user?.user?.firstName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="staffName">Last Name</label>
              <input
                type="text"
                id="staffName"
                placeholder="Enter staff name"
                value={user?.user?.lastName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="staffEmail">Email</label>
              <input
                type="email"
                id="staffEmail"
                placeholder="Enter email"
                value={user?.user?.email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="staffPosition">Position</label>
              <input
                type="text"
                id="staffPosition"
                //   placeholder="Enter position"
                value={user?.user?.position}
              />
            </div>
            <div className="form-group">
              <label htmlFor="staffDepartment">Department</label>
              <input
                type="text"
                id="staffDepartment"
                placeholder="Enter department"
                value={user?.user?.department}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
