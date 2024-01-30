import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getChildDetails } from "../Redux/Actions/UserAction";
import { FaBan, FaBug, FaCalendarCheck, FaUserClock } from "react-icons/fa";
import Loading from "../Components/Loading/Loading";
import Error from "../Components/Error/Error";
import { getBilling } from "../Redux/Actions/BillingActions";
const ChildProfile = () => {
  const childDetails = useSelector((state) => state.childDetails);
  const { error, loading, user } = childDetails;
  const id = window.location.pathname.split("/")[2];
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getChildDetails(id));
  }, [dispatch, id]);

  const billingDetails = useSelector((state) => state.billingDetails);
  const { loadingBilling, errorBilling, billing } = billingDetails;

  React.useEffect(() => {
    dispatch(getBilling(id));
  }, [dispatch, id]);
  return (
    <div className="container">
      {loading ? (
        <Loading />
      ) : error ? (
        <Error variant="danger">{error}</Error>
      ) : (
        <div>
          <div className="row gx-3 g-3 mt-3">
            <div className="col-xl-12 col-md-12 col-12 gx-4 a">
              <div className="stats-card scheduled-bottom">
                <div className="d-flex justify-content-between">
                  <h3 className="scheduled">{`${user?.firstName} ${user?.lastName}`}</h3>
                  <div className="stats-icon scheduled-icon-cont">
                    <FaUserClock className="stats-icon-fa pending" />
                  </div>
                </div>
                <div className="d-flex flex-column gap-3">
                  <b className="mt-3">{user?.email}</b>
                  <b
                    className={
                      billing?.isPaid ? "text-success " : "text-danger "
                    }
                  >
                    REGISTRATION FEE: {billing?.isPaid ? "PAID" : "NOT PAID"}
                  </b>
                  <Link to={`/attendance/${id}`}>
                    <button className="att">View Attendance History</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <section className="mt-4">
            <b>Child Details</b>
            <div className="user-table-container">
              <table className="user-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date of Birth</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Country</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={user?._id}>
                    <td>{`${user?.firstName} ${user?.lastName}`}</td>
                    <td>{user?.email}</td>
                    <td>
                      {user
                        ? new Date(user?.dateOfBirth).toLocaleDateString()
                        : ""}
                    </td>
                    <td>{user?.city}</td>
                    <td>{user?.state}</td>
                    <td>{user?.country}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section className="mt-4">
            <b>Parent Details</b>
            <div className="user-table-container">
              <table className="user-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date of Birth</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Country</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={user?._id}>
                    <td>{`${user?.firstName} ${user?.lastName}`}</td>
                    <td>{user?.email}</td>
                    <td>
                      {user
                        ? new Date(user?.dateOfBirth).toLocaleDateString()
                        : ""}
                    </td>
                    <td>{user?.city}</td>
                    <td>{user?.state}</td>
                    <td>{user?.country}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section className="mt-4 mb-4">
            <b> Authorized Pickup Persons</b>
            <div className="user-table-container">
              <table className="user-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Relationship</th>
                    <th>Contact</th>
                  </tr>
                </thead>
                <tbody>
                  {user?.authorizedPickupPersons?.map((person) => (
                    <tr key={person?._id}>
                      <td>{person?.fullName}</td>
                      <td>{person?.relationship}</td>
                      <td>{person?.contactInfo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default ChildProfile;
