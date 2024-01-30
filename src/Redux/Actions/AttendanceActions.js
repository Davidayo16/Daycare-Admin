import axios from "axios";
import {
  ATTENDANCE_GET_FAIL,
  ATTENDANCE_GET_REQUEST,
  ATTENDANCE_GET_SUCCESS,
  ATTENDANCE_MARK_FAIL,
  ATTENDANCE_MARK_REQUEST,
  ATTENDANCE_MARK_SUCCESS,
  ATTENDANCE_UPDATE_FAIL,
  ATTENDANCE_UPDATE_REQUEST,
  ATTENDANCE_UPDATE_SUCCESS,
} from "./../Constants/AttendanceConstants";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Replace with your environment variable name
});

export const getAttendance = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: ATTENDANCE_GET_REQUEST });

    const {
      staffLogin: { staffInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${staffInfo.token}`,
      },
    };

    const { data } = await api.get(
      `/api/attendance/attendance-historyy/${id}`,

      config
    );

    dispatch({ type: ATTENDANCE_GET_SUCCESS, payload: data });

    // localStorage.setItem("parentInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: ATTENDANCE_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateAttendance =
  (attendanceId, studentId) => async (dispatch, getState) => {
    try {
      dispatch({ type: ATTENDANCE_UPDATE_REQUEST });

      const {
        staffLogin: { staffInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${staffInfo.token}`,
        },
      };

      const { data } = await api.put(
        `/api/attendance/update-attendance-status/${attendanceId}`,
        { studentId },
        config
      );

      dispatch({ type: ATTENDANCE_UPDATE_SUCCESS, payload: data });

      // localStorage.setItem("parentInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: ATTENDANCE_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
