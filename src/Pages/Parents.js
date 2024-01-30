import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getParents } from "../Redux/Actions/UserAction";
import { Link } from "react-router-dom";
import Loading from "../Components/Loading/Loading";
import Error from "../Components/Error/Error";
import { deleteParent } from "./../Redux/Actions/UserAction";
const Parents = () => {
  const parentss = useSelector((state) => state.parentss);
  const { error, loading, parents } = parentss;

  const parentDelete = useSelector((state) => state.parentDelete);
  const {
    error: delError,
    loading: loadingDel,
    parentInfoDelete,
  } = parentDelete;

  //  console.log(children);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getParents());
  }, [dispatch]);

  const handleDeleteParent = async (id) => {
    await dispatch(deleteParent(id));
    await dispatch(getParents());
  };
  return (
    <>
      {" "}
      <div className="container">
        {/* {delError && <Error variant="danger">{error}</Error>} */}
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
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {parents?.map((user) => (
                  <tr key={user._id}>
                    <td>{`${user.firstName} ${user.lastName}`}</td>
                    <td>{user.email}</td>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <Link to={`/parent/${user?._id}`}>
                          <span class="material-symbols-outlined g-icon-view">
                            visibility
                          </span>
                        </Link>
                        <span
                          class="material-symbols-outlined g-icon-delete"
                          onClick={() => handleDeleteParent(user?._id)}
                        >
                          delete
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
                {loadingDel && <Loading />}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default Parents;
