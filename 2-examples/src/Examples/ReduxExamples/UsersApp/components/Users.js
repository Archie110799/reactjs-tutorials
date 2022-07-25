/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUserAsync, getUsersAsync, selectUser } from '../actions';

function Users() {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.userReducer);

  React.useEffect(() => {
    dispatch(getUsersAsync());
  }, []);

  return (
    <div>
      {loading && <small className='text-danger'>Loading ...</small>}
      <h1 className='m-3 text-muted'>Users</h1>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th></th>
            <th>Id</th>
            <th>User Name</th>
            <th>Full Name</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => (
            <tr key={index}>
              <td>
                <button
                  className='btn btn-info'
                  onClick={() => {
                    dispatch(selectUser(item));
                  }}
                >
                  Select
                </button>
              </td>
              <td>{item.id}</td>
              <td>{item.userName}</td>
              <td>{item.fullName}</td>
              <td>{item.email}</td>
              <td>
                <button
                  className='btn btn-danger'
                  onClick={() => {
                    dispatch(deleteUserAsync(item.id));
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
    </div>
  );
}

export default Users;
