import axios from "axios";

import {
  CHILDREN_DETAILS_FAIL,
  CHILDREN_DETAILS_REQUEST,
  CHILD_DELETE_FAIL,
  CHILD_DELETE_REQUEST,
  CHILD_DELETE_SUCCESS,
  CHILD_DETAILS_FAIL,
  CHILD_DETAILS_REQUEST,
  CHILD_DETAILS_SUCCESS,
  ENROLLMENTS_DETAILS_FAIL,
  ENROLLMENTS_DETAILS_REQUEST,
  ENROLLMENTS_DETAILS_SUCCESS,
  ENROLLMENT_DETAILS_FAIL,
  ENROLLMENT_DETAILS_REQUEST,
  ENROLLMENT_DETAILS_SUCCESS,
  ENROLLMENT_UPDATE_FAIL,
  ENROLLMENT_UPDATE_REQUEST,
  ENROLLMENT_UPDATE_SUCCESS,
  PARENTS_DETAILS_FAIL,
  PARENTS_DETAILS_REQUEST,
  PARENTS_DETAILS_SUCCESS,
  PARENT_DELETE_FAIL,
  PARENT_DELETE_REQUEST,
  PARENT_DELETE_SUCCESS,
  PARENT_DETAILS_FAIL,
  PARENT_DETAILS_REQUEST,
  PARENT_DETAILS_SUCCESS,
  STAFFS_DETAILS_FAIL,
  STAFFS_DETAILS_REQUEST,
  STAFFS_DETAILS_SUCCESS,
  STAFF_DELETE_FAIL,
  STAFF_DELETE_REQUEST,
  STAFF_DELETE_SUCCESS,
  STAFF_DETAILS_FAIL,
  STAFF_DETAILS_REQUEST,
  STAFF_DETAILS_SUCCESS,
  STAFF_USER_LOGIN_FAIL,
  STAFF_USER_LOGIN_REQUEST,
  STAFF_USER_LOGIN_SUCCESS,
  STAFF_USER_LOGOUT,
} from "../Constants/UserConstants";
import { CHILDREN_DETAILS_SUCCESS } from "./../Constants/UserConstants";
import { FaYoutube } from "react-icons/fa";
import { toast } from "react-toastify";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Replace with your environment variable name
});

// //******ADMIN LOGIN*****
// export const parentLog = (email, password) => async (dispatch) => {
//   try {
//     console.log("email", email, "pass", password);
//     dispatch({ type: PARENT_USER_LOGIN_REQUEST });
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//     const { data } = await axios.post(
//       "/api/users/parent-login",
//       { email, password },
//       config
//     );
//     console.log(data);

//     dispatch({ type: PARENT_USER_LOGIN_SUCCESS, payload: data });

//     localStorage.setItem("parentInfo", JSON.stringify(data));
//   } catch (error) {
//     dispatch({
//       type: PARENT_USER_LOGIN_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

//**** CHILD DETAILS
export const getChildDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: CHILD_DETAILS_REQUEST });
    const {
      staffLogin: { staffInfo },
    } = getState();
    console.log(staffInfo.token);
    const config = {
      headers: {
        Authorization: `Bearer ${staffInfo.token}`,
      },
    };
    const { data } = await api.get(`/api/users/child-profile/${id}`, config);
    dispatch({ type: CHILD_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not Authorized, no token") {
      // dispatch(logoutChild());
    }
    dispatch({
      type: CHILD_DETAILS_FAIL,
      payload: message,
    });
  }
};

export const deleteChild = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: CHILD_DELETE_REQUEST });

    const {
      staffLogin: { staffInfo },
    } = getState();
    console.log(staffInfo.token);
    const config = {
      headers: {
        Authorization: `Bearer ${staffInfo.token}`,
      },
    };

    const { data } = await api.delete(`/api/users/child-profile/${id}`, config);
    dispatch({ type: CHILD_DELETE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not Authorized, no token") {
      // dispatch(logoutChild());
    }
    dispatch({
      type: CHILD_DELETE_FAIL,
      payload: message,
    });
  }
};

// **** GET PARENT DETAIL
export const getParentDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: PARENT_DETAILS_REQUEST });
    const {
      staffLogin: { staffInfo },
    } = getState();
    console.log(staffInfo.token);
    const config = {
      headers: {
        Authorization: `Bearer ${staffInfo.token}`,
      },
    };
    const { data } = await api.get(`/api/users/parent-profile/${id}`, config);
    dispatch({ type: PARENT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not Authorized, no token") {
      // dispatch(logoutChild());
    }
    dispatch({
      type: PARENT_DETAILS_FAIL,
      payload: message,
    });
  }
};

// **** DELETE PARENT ******
export const deleteParent = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: PARENT_DELETE_REQUEST });
    const {
      staffLogin: { staffInfo },
    } = getState();
    console.log(staffInfo.token);
    const config = {
      headers: {
        Authorization: `Bearer ${staffInfo.token}`,
      },
    };
    const { data } = await api.delete(
      `/api/users/parent-profile/${id}`,
      config
    );
    dispatch({ type: PARENT_DELETE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not Authorized, no token") {
      // dispatch(logoutChild());
    }
    dispatch({
      type: PARENT_DELETE_FAIL,
      payload: message,
    });
  }
};

// export const updateChild = (user) => async (dispatch, getState) => {
//   console.log(user);
//   try {
//     dispatch({ type: CHILD_UPDATE_REQUEST });
//     const {
//       childLogin: { childInfo },
//     } = getState();
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${childInfo.token}`,
//       },
//     };
//     const { data } = await api.put("/api/users/child-profile", user, config);
//     console.log(data);
//     dispatch({ type: CHILD_UPDATE_SUCCESS, payload: data });
//     dispatch({ type: CHILD_USER_LOGIN_SUCCESS, payload: data });
//     localStorage.setItem("childInfo", JSON.stringify(data));
//     console.log(data);
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message;
//     if (message === "Not Authorized, token failed") {
//       dispatch(logoutChild());
//     }
//     if (message === "Not Authorized, no token") {
//       dispatch(logoutChild());
//     }
//     dispatch({
//       type: CHILD_UPDATE_FAIL,
//       payload: message,
//     });
//   }
// };

// //******STAFF REGISTER*****
// export const staffRegister =
//   (firstName, lastName, email, password, position, department) => async (dispatch) => {
//     try {
//       dispatch({ type: STAFF_REGISTER_REQUEST });
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };
//       const { data } = await api.post(
//         "/api/users/staff-register",
//         { firstName, lastName, email, password,  position, department },
//         config
//       );
//       dispatch({ type: STAFF_REGISTER_SUCCESS, payload: data });
//       dispatch({ type: STAFF_USER_LOGIN_SUCCESS, payload: data }); // Optionally, log in the newly registered parent automatically
//       localStorage.setItem("staffInfo", JSON.stringify(data));
//     } catch (error) {
//       dispatch({
//         type: STAFF_REGISTER_FAIL,
//         payload:
//           error.response && error.response.data.message
//             ? error.response.data.message
//             : error.message,
//       });
//     }
//   };

//   //******STAFF LOGIN*****
// export const staffLog = (email, password) => async (dispatch) => {
//   try {

//     dispatch({ type: STAFF_USER_LOGIN_REQUEST });
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//     const { data } = await axios.post(
//       "/api/users/staff-login",
//       { email, password },
//       config
//     );
//     console.log(data);

//     dispatch({ type: STAFF_USER_LOGIN_SUCCESS, payload: data });

//     localStorage.setItem("staffInfo", JSON.stringify(data));
//   } catch (error) {
//     dispatch({
//       type: STAFF_USER_LOGIN_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

// ****GET CHILDREN ***
export const getChildren = () => async (dispatch, getState) => {
  try {
    dispatch({ type: CHILDREN_DETAILS_REQUEST });
    const {
      staffLogin: { staffInfo },
    } = getState();
    console.log(staffInfo.token);
    const config = {
      headers: {
        Authorization: `Bearer ${staffInfo.token}`,
      },
    };
    const { data } = await api.get(`/api/users/child`, config);
    dispatch({ type: CHILDREN_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not Authorized, no token") {
      // dispatch(logoutStaff());
    }
    dispatch({
      type: CHILDREN_DETAILS_FAIL,
      payload: message,
    });
  }
};

// *** GET PARENTS ****
export const getParents = () => async (dispatch, getState) => {
  try {
    dispatch({ type: PARENTS_DETAILS_REQUEST });
    const {
      staffLogin: { staffInfo },
    } = getState();
    console.log(staffInfo.token);
    const config = {
      headers: {
        Authorization: `Bearer ${staffInfo.token}`,
      },
    };

    const { data } = await api.get(`/api/users/parent`, config);
    dispatch({ type: PARENTS_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not Authorized, no token") {
      // dispatch(logoutStaff());
    }
    dispatch({
      type: PARENTS_DETAILS_FAIL,
      payload: message,
    });
  }
};

// *** GET ENROLLMENTS ****
export const getEnrollments = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ENROLLMENTS_DETAILS_REQUEST });
    const {
      staffLogin: { staffInfo },
    } = getState();
    console.log(staffInfo.token);
    const config = {
      headers: {
        Authorization: `Bearer ${staffInfo.token}`,
      },
    };
    const { data } = await api.get(`/api/users/enrollmentss`, config);
    dispatch({ type: ENROLLMENTS_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not Authorized, no token") {
      // dispatch(logoutStaff());
    }
    dispatch({
      type: ENROLLMENTS_DETAILS_FAIL,
      payload: message,
    });
  }
};

export const getEnrollment = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: ENROLLMENT_DETAILS_REQUEST });
    const {
      staffLogin: { staffInfo },
    } = getState();
    console.log(staffInfo.token);
    const config = {
      headers: {
        Authorization: `Bearer ${staffInfo.token}`,
      },
    };
    const { data } = await api.get(`/api/users/enrollments/${id}`, config);
    dispatch({ type: ENROLLMENT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not Authorized, no token") {
      // dispatch(logoutStaff());
    }
    dispatch({
      type: ENROLLMENT_DETAILS_FAIL,
      payload: message,
    });
  }
};

export const giveAdmission = (id, newStatus) => async (dispatch, getState) => {
  try {
    dispatch({ type: ENROLLMENT_UPDATE_REQUEST });

    const {
      staffLogin: { staffInfo },
    } = getState();
    console.log(staffInfo.token);
    const config = {
      headers: {
        Authorization: `Bearer ${staffInfo.token}`,
        "Content-Type": "application/json",
      },
    };
    const { data } = await api.put(
      `/api/users/enrollment/${id}/status`,
      { newStatus },
      config
    );
    dispatch({ type: ENROLLMENT_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not Authorized, no token") {
      // dispatch(logoutStaff());
    }
    dispatch({
      type: ENROLLMENT_UPDATE_FAIL,
      payload: message,
    });
  }
};

// *** GET STAFFS ****
export const getStaffs = () => async (dispatch, getState) => {
  try {
    dispatch({ type: STAFFS_DETAILS_REQUEST });
    const {
      staffLogin: { staffInfo },
    } = getState();
    console.log(staffInfo.token);
    const config = {
      headers: {
        Authorization: `Bearer ${staffInfo.token}`,
      },
    };
    const { data } = await api.get(`/api/users/staff`, config);
    dispatch({ type: STAFFS_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not Authorized, no token") {
      // dispatch(logoutStaff());
    }
    dispatch({
      type: STAFFS_DETAILS_FAIL,
      payload: message,
    });
  }
};

export const getStaff = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: STAFF_DETAILS_REQUEST });
    const {
      staffLogin: { staffInfo },
    } = getState();
    console.log(staffInfo.token);
    const config = {
      headers: {
        Authorization: `Bearer ${staffInfo.token}`,
      },
    };
    const { data } = await api.get(`/api/users/staff/${id}`, config);
    dispatch({ type: STAFF_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not Authorized, no token") {
      // dispatch(logoutStaff());
    }
    dispatch({
      type: STAFF_DETAILS_FAIL,
      payload: message,
    });
  }
};

export const getStaffDetails = () => async (dispatch, getState) => {
  try {
    dispatch({ type: STAFF_DETAILS_REQUEST });
    const {
      staffLogin: { staffInfo },
    } = getState();
    console.log(staffInfo.token);
    const config = {
      headers: {
        Authorization: `Bearer ${staffInfo.token}`,
      },
    };
    const { data } = await api.get(`/api/users/staff-profile`, config);
    dispatch({ type: STAFF_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not Authorized, no token") {
      dispatch(logoutStaff());
    }
    dispatch({
      type: STAFF_DETAILS_FAIL,
      payload: message,
    });
  }
};

// **** DELETE PARENT ******
export const deleteStaff = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: STAFF_DELETE_REQUEST });
    const {
      staffLogin: { staffInfo },
    } = getState();
    console.log(staffInfo.token);
    const config = {
      headers: {
        Authorization: `Bearer ${staffInfo.token}`,
      },
    };
    const { data } = await api.delete(`/api/users/staff-profile/${id}`, config);
    dispatch({ type: STAFF_DELETE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not Authorized, no token") {
      // dispatch(logoutChild());
    }
    dispatch({
      type: STAFF_DELETE_FAIL,
      payload: message,
    });
  }
};

export const staffLog = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: STAFF_USER_LOGIN_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await api.post(
      "/api/users/staff-login",
      { email, password },
      config
    );
    console.log(data);
    if (!data.isAdmin === true) {
      toast.error("You are not Admin!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      dispatch({
        type: STAFF_USER_LOGIN_FAIL,
      });
    } else {
      dispatch({ type: STAFF_USER_LOGIN_SUCCESS, payload: data });
         localStorage.setItem("staffInfo", JSON.stringify(data));
    }

 
  } catch (error) {
    dispatch({
      type: STAFF_USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logoutStaff = () => (dispatch) => {
  localStorage.removeItem("staffInfo");
  dispatch({ type: STAFF_USER_LOGOUT });
  document.location.href = "/login";
};
