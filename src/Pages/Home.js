import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getChildren } from "../Redux/Actions/UserAction";
import "./Home.css";
import { Link } from 'react-router-dom';
import Loading from "../Components/Loading/Loading";
import Error from './../Components/Error/Error';
import { deleteChild } from './../Redux/Actions/UserAction';

const Home = () => {
  const childrenDetails = useSelector((state) => state.childrenDetails);
  const { error, loading, children } = childrenDetails;

   const childDelete = useSelector((state) => state.childDelete);
   const { error:delError, loading:loadingDel, childInfoDelete } = childDelete;

  console.log(children);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getChildren());
  }, [dispatch]);

const handleDeleteChild = async(id) => {
  console.log(id);
  await dispatch(deleteChild(id));
   await  dispatch(getChildren());
};



  return (
    <>
      {" "}
      {loading ? (
        <Loading />
      ) : error ? (
        <Error>{error}</Error>
      ) : (
        <div className="container">
          {delError && <Error variant="danger">{error}</Error>}
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
                {children?.map((user) => (
                  <tr key={user._id}>
                    <td>{`${user.firstName} ${user.lastName}`}</td>
                    <td>{user.email}</td>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <Link to={`/childprofile/${user?._id}`}>
                          <span class="material-symbols-outlined g-icon-view">
                            visibility
                          </span>
                        </Link>
                        <span
                          className="material-symbols-outlined g-icon-delete"
                          onClick={() => handleDeleteChild(user?._id)}
                        >
                          delete
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
              {loadingDel && <Loading />}
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
