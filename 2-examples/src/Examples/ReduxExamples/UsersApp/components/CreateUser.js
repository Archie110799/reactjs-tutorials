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
        disabled={loading}
        onClick={() => {
          const user = {
            userName: 'manhph',
            email: 'manhph@softech.edu.vn',
            password: '123456789',
            fullName: 'Pham Hung Manh',
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
