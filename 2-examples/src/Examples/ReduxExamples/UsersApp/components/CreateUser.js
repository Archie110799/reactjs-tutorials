/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createUserAsync, getUsersAsync } from '../actions';

function CreateUser() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.userReducer);

  React.useEffect(() => {
    dispatch(getUsersAsync());
  }, []);

  return (
    <div>
      <button
        className='btn btn-dark'
        disabled={loading}
        onClick={() => {
          let randomName = (Math.random() + 1).toString(36).substring(7);
          const user = {
            userName: randomName,
            email: randomName + '@softech.edu.vn',
            password: '123456789',
            fullName: `${randomName}-${randomName}`,
          };
          dispatch(createUserAsync(user));
        }}
      >
        Create a user
      </button>
    </div>
  );
}

export default CreateUser;
