import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEnrollments } from "../Redux/Actions/UserAction";
import { Link } from "react-router-dom";

import Error from "../Components/Error/Error";
import Loading from './../Components/Loading/Loading';
const Enrollments = () => {
  const dispatch = useDispatch();
  const enrollmentss = useSelector((state) => state.enrollmentss);
  const { error, loading, enrollments } = enrollmentss;

  React.useEffect(() => {
    dispatch(getEnrollments());
  }, [dispatch, window.location.pathname]);

  return (
    <div className="wrapper">
      {loading ? (
        <Loading />
      ) : error ? (
        <Error>{error}</Error>
      ) : (
        <section className="mt-4 container">
          <b>Enrollments</b>
          <div className="user-table-container">

       
              <table className="user-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date of Birth</th>
                    <th>Program</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {enrollments?.map((person) => (
                    <tr key={person?._id}>
                      <td>
                        {person?.childDetails?.firstName}{" "}
                        {person?.childDetails?.lastName}
                      </td>
                      <td>{person?.childDetails?.email}</td>
                      <td>
                        {person
                          ? new Date(
                              person?.childDetails?.dateOfBirth
                            ).toLocaleDateString()
                          : ""}
                      </td>
                      <td>{person?.typeOfProgram}</td>
                      <td
                        style={{
                          color:
                            person?.status === "Admitted" ? "green" : "#cf5d85",
                        }}
                      >
                        <div className="d-flex align-items-center">
                          {person?.status}
                          {person?.status === "Admitted" && (
                            <span className="material-symbols-outlined">
                              check_circle
                            </span>
                          )}
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-3">
                          <Link to={`/admission/${person?._id}`}>
                            <span className="material-symbols-outlined g-icon-view">
                              visibility
                            </span>
                          </Link>
                          <span
                            className="material-symbols-outlined g-icon-delete"
                            //   onClick={() => handleDeleteChild(person?._id)}
                          >
                            delete
                          </span>
                          {/* {loadingDel && <Loading />} */}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
         
          </div>
        </section>
      )}
    </div>
  );
};

export default Enrollments;
