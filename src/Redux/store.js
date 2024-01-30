import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { sideBarReucer, smallSideBarReducer } from "./Reducers/SidebarReducer/SidebarReducer";
import {
  childDeleteReducer,
  childDetailsReducer,
  childrenDetailsReducer,
  enrollmenUpdateReducer,
  enrollmentDetailsReducer,
  enrollmentsDetailsReducer,
  parentDeleteReducer,
  parentDetailsReducer,
  parentsDetailsReducer,
  staffDeleteReducer,
  staffDetailsReducer,
  staffsDetailsReducer,
  staffLoginReducer,
} from "./Reducers/UserReducers";
import {
  billingDetailsReducer,
  billingHistoryReducer,
} from "./Reducers/BillingReducer";
import {
  attendaceHistoryReducer,
  attendaceUpdateReducer,
} from "./Reducers/AttendanceReducer";

const reducer = combineReducers({
  setSidebar: sideBarReucer,
  childrenDetails: childrenDetailsReducer,
  childDetails: childDetailsReducer,
  childDelete: childDeleteReducer,
  enrollmentss: enrollmentsDetailsReducer,
  enrollments: enrollmentDetailsReducer,
  enrollmentUpdate: enrollmenUpdateReducer,
  billingHistoryy: billingHistoryReducer,
  billingDetails: billingDetailsReducer,
  parentss: parentsDetailsReducer,
  parents: parentDetailsReducer,
  parentDelete: parentDeleteReducer,
  staffss: staffsDetailsReducer,
  staffDetails: staffDetailsReducer,
  staffDelete: staffDeleteReducer,
  staffLogin: staffLoginReducer,
  attendanceHistory: attendaceHistoryReducer,
  attendanceUpdate: attendaceUpdateReducer,
  setSmallSidebar: smallSideBarReducer,
});
const parentInfoFromLocalStorage = localStorage.getItem("parentInfo")
  ? JSON.parse(localStorage.getItem("parentInfo"))
  : null;

const childInfoFromLocalStorage = localStorage.getItem("childInfo")
  ? JSON.parse(localStorage.getItem("childInfo"))
  : null;

const staffInfoFromLocalStorage = localStorage.getItem("staffInfo")
  ? JSON.parse(localStorage.getItem("staffInfo"))
  : null;

const innitialState = {
  parentLogin: {
    parentInfo: parentInfoFromLocalStorage,
  },
  childLogin: {
    childInfo: childInfoFromLocalStorage,
  },
  staffLogin: {
    staffInfo: staffInfoFromLocalStorage,
  },
};
const Middleware = [thunk];
const store = createStore(
  reducer,
  innitialState,
  composeWithDevTools(applyMiddleware(...Middleware))
);

export default store;
