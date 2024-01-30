
import { CHILDREN_DETAILS_FAIL, CHILDREN_DETAILS_REQUEST, CHILDREN_DETAILS_SUCCESS, CHILD_DELETE_FAIL, CHILD_DELETE_RESET, CHILD_DELETE_SUCCESS, CHILD_DETAILS_FAIL, CHILD_DETAILS_REQUEST, CHILD_DETAILS_SUCCESS, ENROLLMENTS_DETAILS_FAIL, ENROLLMENTS_DETAILS_REQUEST, ENROLLMENTS_DETAILS_SUCCESS, ENROLLMENT_DETAILS_FAIL, ENROLLMENT_DETAILS_REQUEST, ENROLLMENT_DETAILS_SUCCESS, ENROLLMENT_UPDATE_FAIL, ENROLLMENT_UPDATE_REQUEST, ENROLLMENT_UPDATE_SUCCESS, PARENTS_DETAILS_FAIL, PARENTS_DETAILS_REQUEST, PARENTS_DETAILS_SUCCESS, PARENT_DELETE_REQUEST, PARENT_DETAILS_FAIL, PARENT_DETAILS_REQUEST, PARENT_DETAILS_SUCCESS, STAFFS_DETAILS_FAIL, STAFFS_DETAILS_REQUEST, STAFFS_DETAILS_SUCCESS, STAFF_DETAILS_FAIL, STAFF_DETAILS_REQUEST, STAFF_DETAILS_SUCCESS, PARENT_DELETE_SUCCESS, PARENT_DELETE_FAIL, CHILD_DELETE_REQUEST, STAFF_DELETE_SUCCESS, STAFF_DELETE_FAIL, STAFF_DELETE_REQUEST, STAFF_USER_LOGIN_REQUEST, STAFF_USER_LOGIN_SUCCESS, STAFF_USER_LOGIN_FAIL, STAFF_USER_LOGOUT } from './../Constants/UserConstants';


// export const parentLoginReducer = (state = {}, action) => {
//   switch (action.type) {
//     case PARENT_USER_LOGIN_REQUEST:
//       return { loading: true };
//     case PARENT_USER_LOGIN_SUCCESS:
//       return { loading: false, parentInfo: action.payload };

//     case PARENT_USER_LOGIN_FAIL:
//       return { loading: false, error: action.payload };
//     case PARENT_USER_LOGOUT:
//       return {};
//     default:
//       return state;
//   }
// };

// export const enrollmentReducer = (state = {}, action) => {
//   switch (action.type) {
//     case ENROLLMENT_REQUEST:
//       return { loading: true };
//     case ENROLLMENT_SUCCESS:
//       return { loading: false, enrollmentInfo: action.payload };

//     case ENROLLMENT_FAIL:
//       return { loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// export const enrollmentDetailsReducer = (state = {}, action) => {
//   switch (action.type) {
//     case ENROLLMENT_DETAILS_REQUEST:
//       return { loading: true };
//     case ENROLLMENT_DETAILS_SUCCESS:
//       return { loading: false, enrollmentDetailInfo: action.payload };

//     case ENROLLMENT_DETAILS_FAIL:
//       return { loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };


// export const parentRegisterReducer = (state = {}, action) => {
//   switch (action.type) {
//     case PARENT_REGISTER_REQUEST:
//       return { loading: true };
//     case PARENT_REGISTER_SUCCESS:
//       return { loading: false, parentInfo: action.payload };
//     case PARENT_REGISTER_FAIL:
//       return { loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// // *****PARENT DETAILS

// };
// //********UPDATE USER DETAILS
// export const parentUpdateReducer = (state = {}, action) => {
//   switch (action.type) {
//     case PARENT_UPDATE_REQUEST:
//       return { loading: true };
//     case PARENT_UPDATE_SUCCESS:
//       return { loading: false, parentInfo: action.payload };
//     case PARENT_UPDATE_FAIL:
//       return { loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };




// export const childLoginReducer = (state = {}, action) => {
//   switch (action.type) {
//     case CHILD_USER_LOGIN_REQUEST:
//       return { loading: true };
//     case CHILD_USER_LOGIN_SUCCESS:
//       return { loading: false, childInfo: action.payload };

//     case CHILD_USER_LOGIN_FAIL:
//       return { loading: false, error: action.payload };
//     case CHILD_USER_LOGOUT:
//       return {};
//     default:
//       return state;
//   }
// };


// // *****CHILD DETAILS
export const childrenDetailsReducer = (state = { children: [] }, action) => {
  switch (action.type) {
    case CHILDREN_DETAILS_REQUEST:
      return { ...state, loading: true };
    case CHILDREN_DETAILS_SUCCESS:
      return { loading: false, children: action.payload };
    case CHILDREN_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

// *****CHILD DETAILS
export const childDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case CHILD_DETAILS_REQUEST:
      return { ...state, loading: true };
    case CHILD_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case CHILD_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

//********DELETE CHILD**************
export const childDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case CHILD_DELETE_REQUEST:
      return { loading: true };
    case CHILD_DELETE_SUCCESS:
      return { loading: false, childInfoDelete: action.payload };
    case CHILD_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// ****DELETE PARENT **********
export const parentDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PARENT_DELETE_REQUEST:
      return { loading: true };
    case PARENT_DELETE_SUCCESS:
      return { loading: false, parentInfoDelete: action.payload };
    case PARENT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const staffDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case STAFF_DELETE_REQUEST:
      return { loading: true };
    case STAFF_DELETE_SUCCESS:
      return { loading: false, staffInfoDelete: action.payload };
    case STAFF_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


export const enrollmentsDetailsReducer = (state = { enrollments: [] }, action) => {
  switch (action.type) {
    case ENROLLMENTS_DETAILS_REQUEST:
      return { ...state, loading: true };
    case ENROLLMENTS_DETAILS_SUCCESS:
      return { loading: false, enrollments: action.payload };
    case ENROLLMENTS_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const enrollmentDetailsReducer = (
  state = { enrollment: {} },
  action
) => {
  switch (action.type) {
    case ENROLLMENT_DETAILS_REQUEST:
      return { ...state, loading: true };
    case ENROLLMENT_DETAILS_SUCCESS:
      return { loading: false, enrollment: action.payload };
    case ENROLLMENT_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
export const enrollmenUpdateReducer = (
  state = { },
  action
) => {
  switch (action.type) {
    case ENROLLMENT_UPDATE_REQUEST:
      return { ...state, loading: true };
    case ENROLLMENT_UPDATE_SUCCESS:
      return { loading: false, enrollment: action.payload };
    case ENROLLMENT_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};


// ***** GET ALL PARENTS
export const parentsDetailsReducer = (state = { parents: [] }, action) => {
  switch (action.type) {
    case PARENTS_DETAILS_REQUEST:
      return { ...state, loading: true };
    case PARENTS_DETAILS_SUCCESS:
      return { loading: false, parents: action.payload };
    case PARENTS_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const parentDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case PARENT_DETAILS_REQUEST:
      return { ...state, loading: true };
    case PARENT_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case PARENT_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
}




// ****GET ALL STAFFS
export const staffsDetailsReducer = (state = { staffs: [] }, action) => {
  switch (action.type) {
    case STAFFS_DETAILS_REQUEST:
      return { ...state, loading: true };
    case STAFFS_DETAILS_SUCCESS:
      return { loading: false, staffs: action.payload };
    case STAFFS_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
}
// //********UPDATE CHILD DETAILS
// export const childUpdateReducer = (state = {}, action) => {
//   switch (action.type) {
//     case CHILD_UPDATE_REQUEST:
//       return { loading: true };
//     case CHILD_UPDATE_SUCCESS:
//       return { loading: false, childInfoUpdate: action.payload };
//     case CHILD_UPDATE_FAIL:
//       return { loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };


// export const staffLoginReducer = (state = {}, action) => {
//   switch (action.type) {
//     case STAFF_USER_LOGIN_REQUEST:
//       return { loading: true };
//     case STAFF_USER_LOGIN_SUCCESS:
//       return { loading: false, staffInfo: action.payload };

//     case STAFF_USER_LOGIN_FAIL:
//       return { loading: false, error: action.payload };
//     case STAFF_USER_LOGOUT:
//       return {};
//     default:
//       return state;
//   }
// };


export const staffDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case STAFF_DETAILS_REQUEST:
      return { ...state, loading: true };
    case STAFF_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case STAFF_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


export const staffLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case STAFF_USER_LOGIN_REQUEST:
      return { loading: true };
    case STAFF_USER_LOGIN_SUCCESS:
      return { loading: false, staffInfo: action.payload };

    case STAFF_USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case STAFF_USER_LOGOUT:
      return {};
    default:
      return state;
  }
};