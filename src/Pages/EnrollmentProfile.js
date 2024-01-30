import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getEnrollment, giveAdmission } from "../Redux/Actions/UserAction";
import Loading from "../Components/Loading/Loading";
const EnrollmentProfile = () => {
      const newStatus = "Admitted";
  const enrollments = useSelector((state) => state.enrollments);
  const { error, loading, enrollment } = enrollments;
  const id = window.location.pathname.split("/")[2];
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getEnrollment(id));
  }, [dispatch]);
    
      const enrollmentUpdate = useSelector((state) => state.enrollmentUpdate);
      const { error:loadingEr, loading:loadingAd,} = enrollmentUpdate;
  
    const handleAddmission = async () => {
       await dispatch(giveAdmission(id, newStatus))
        await   dispatch(getEnrollment(id));
    }
  return (
    <div>
      <div className="staff-profile">
        <h2 className="mb-5">Enrollment Id: {enrollment?._id}</h2>
        <div className="profile-details">
          <div className="form-group">
            <label htmlFor="staffName">First Name</label>
            <input
              type="text"
              id="staffName"
              placeholder="Enter staff name"
              value={enrollment?.childDetails?.firstName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="staffName">Last Name</label>
            <input
              type="text"
              id="staffName"
              placeholder="Enter staff name"
              value={enrollment?.childDetails?.lastName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="staffEmail">Email</label>
            <input
              type="email"
              id="staffEmail"
              placeholder="Enter email"
              value={enrollment?.childDetails?.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="staffPosition">Date of Birth</label>
            <input
              type="text"
              id="staffPosition"
              //   placeholder="Enter position"
              value={
                enrollment
                  ? new Date(
                      enrollment?.childDetails?.dateOfBirth
                    ).toLocaleDateString()
                  : ""
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="staffDepartment">Country</label>
            <input
              type="text"
              id="staffDepartment"
              placeholder="Enter department"
              value={enrollment?.childDetails?.country}
            />
          </div>
          <div className="form-group">
            <label htmlFor="staffEmail">State</label>
            <input
              type="text"
              id="staffEmail"
              placeholder="Enter email"
              value={enrollment?.childDetails?.state}
            />
          </div>
          <div className="form-group">
            <label htmlFor="staffEmail">City</label>
            <input
              type="email"
              id="staffEmail"
              placeholder="Enter email"
              value={enrollment?.childDetails?.city}
            />
          </div>
          <div className="form-group">
            <label htmlFor="staffEmail">Enrollment Date</label>
            <input
              type="text"
              id="staffEmail"
              placeholder="Enter email"
              value={
                enrollment
                  ? new Date(enrollment?.enrollmentDate).toLocaleDateString()
                  : ""
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="staffEmail">Allergies</label>
            <input
              type="text"
              id="staffEmail"
              value={enrollment?.childDetails?.allergies.join(", ")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="staffEmail">Medical Conditions</label>
            <input
              type="text"
              id="staffEmail"
              value={enrollment?.childDetails?.medicalConditions.join(", ")}
            />
          </div>
        </div>
        <section className="mt-3">
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
                {enrollment?.authorizedPickupPersons?.map((person) => (
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
        <div className="button-container">
         
            <div className="">
              <button
                className="update-profile-btn bg-danger"
                disabled={loadingAd || enrollment?.status==='Admitted'}
                onClick={() => handleAddmission()}
              >
                {enrollment?.status==="Admitted"?"Admitted":"Process Admission"}
                {loadingAd && <Loading />}
              </button>
            </div>
        
        </div>
      </div>
    </div>
  );
};

export default EnrollmentProfile;
