import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getParentDetails } from "../Redux/Actions/UserAction";
import Loading from "../Components/Loading/Loading";
import Error from "../Components/Error/Error";
import { FaUserClock } from "react-icons/fa";
const ParentProfile = () => {
  const parents = useSelector((state) => state.parents);
  const { error, loading, user } = parents;
  const id = window.location.pathname.split("/")[2];
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getParentDetails(id));
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
                    <th>Contact</th>
                    <th>homeAddress</th>
                    <th>workAddress</th>
                    <th>relationship</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={user?._id}>
                    <td>{`${user?.firstName} ${user?.lastName}`}</td>
                    <td>{user?.email}</td>
                    <td>{user?.contact}</td>
                    <td>{user?.homeAddress}</td>
                    <td>{user?.workAddress}</td>
                    <td>{user?.relationship}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section className="mt-4">
            <b>Children Details</b>
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
                  {user?.children?.map((person) => (
                    <tr key={person?._id}>
                      <td>
                        {person?.firstName} {person?.lastName}
                      </td>
                      <td>{person?.email}</td>
                      <td>
                        {" "}
                        {user
                          ? new Date(person?.dateOfBirth).toLocaleDateString()
                          : ""}
                      </td>
                      <td>{person?.city}</td>
                      <td>{person?.state}</td>
                      <td>{person?.country}</td>
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

export default ParentProfile;
