import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteStaff, getStaffs } from "../Redux/Actions/UserAction";
import Loading from "../Components/Loading/Loading";
import Error from "../Components/Error/Error";
import { Link } from "react-router-dom";
const Staff = () => {
  const staffss = useSelector((state) => state.staffss);
  const { error, loading, staffs } = staffss;

  //  const childDelete = useSelector((state) => state.childDelete);
  //  const {
  //    error: delError,
  //    loading: loadingDel,
  //    childInfoDelete,
  //  } = childDelete;
  console.log(staffs);

  //  console.log(children);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getStaffs());
  }, [dispatch]);



   const staffDelete = useSelector((state) => state.staffDelete);
   const {
     error: delError,
     loading: loadingDel,
     staffInfoDelete,
   } = staffDelete;

   

   const handleDeleteStaff = async (id) => {
     console.log(id);
     await dispatch(deleteStaff(id));
     await dispatch(getStaffs());
   };
  return (
    <>
      {" "}
      <div className="container">
        {delError && <Error variant="danger">{error}</Error>}
        {loading ? (
          <Loading />
        ) : error ? (
          <Error>{error}</Error>
        ) : (
          <div className="user-table-container">
            <table className="user-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>

                  <th>Position</th>

                  <th>Department</th>

                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {staffs?.map((user) => (
                  <tr key={user._id}>
                    <td>{`${user.firstName} ${user.lastName}`}</td>
                    <td>{user.email}</td>
                    <td>{user.position}</td>
                    <td>{user.department}</td>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <span
                          class="material-symbols-outlined g-icon-delete"
                          onClick={() => handleDeleteStaff(user?._id)}
                        >
                          delete
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
                {/* {loadingDel && <Loading />} */}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default Staff;
