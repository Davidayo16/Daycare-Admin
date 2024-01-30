import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  getAttendance,
  updateAttendance,
} from "../Redux/Actions/AttendanceActions";
const AttendanceHistory = () => {
  const getStatusColor = (status) => {
    return status === "present"
      ? "#1b5e1b"
      : status === "confirming"
      ? "#5297b2"
      : "red";
  };
  const dispatch = useDispatch();
  const attendanceHistory = useSelector((state) => state.attendanceHistory);
  const { loading: historyLoading, attendance } = attendanceHistory;
  console.log(attendance.attendanceHistory);
  const id = window.location.pathname.split("/")[2];

  React.useEffect(() => {
    dispatch(getAttendance(id));
  }, [dispatch, id]);

  const confirmAttendance = async (attendanceId) => {
    await dispatch(updateAttendance(attendanceId, id));
    await dispatch(getAttendance(id));
  };

  return (
    <div className="attendance-history">
      <h2>Child's Attendance History by Course</h2>
      {attendance?.attendanceHistory?.map((courseData, index) => (
        <div className="course-attendance mt-4" key={index}>
          <h3>{courseData?.courseId?.name.toUpperCase()}</h3>
          <div className="child-table-container">
            <table className="attendance-table">
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Date</th>
                  <th>Location</th>
                  <th>Attendance Status</th>
                  <th>Mark Present</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  style={{
                    backgroundColor: getStatusColor(courseData.status),
                    color: "white",
                  }}
                  key={index}
                >
                  <td>{courseData?.courseId?.name.toUpperCase()}</td>
                  <td>{new Date(courseData.date).toLocaleDateString()}</td>
                  <td>{courseData?.courseId?.location}</td>
                  <td>
                    {courseData.status === "present" ? (
                      <div className="d-flex align-items-center">
                        Present
                        <span class="material-symbols-outlined">task_alt</span>
                      </div>
                    ) : courseData.status === "confirming" ? (
                      "Confirming..."
                    ) : (
                      "Absent"
                    )}
                  </td>
                  <td>
                    {" "}
                    {courseData?.status === "confirming" ? (
                      <button
                        className="at"
                        onClick={() => confirmAttendance(courseData?._id)}
                      >
                        Mark present
                      </button>
                    ) : (
                      <b>Present</b>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AttendanceHistory;
