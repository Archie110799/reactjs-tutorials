import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const getSuppliersAsync = () => {
  return (dispatch) => {
    dispatch(getSuppliers_Pending());

    fetch(
      "https://62ce2903066bd2b699309018.mockapi.io/api/v1/suppliers/?page=4&limit=15"
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch(getSuppliers_Success(data));
      })
      .catch((error) => {
        dispatch(getSuppliers_Error(error));
      });
  };
};

// CÁC DISPATCH báo trạng thái của ASYNC
const getSuppliers_Success = (data) => ({
  type: "GET_SUCCESS", // ACTION TYPE
  suppliers: data, // PARAMETER
});

const getSuppliers_Pending = () => ({
  type: "GET_PENDING", // ACTION TYPE
});

const getSuppliers_Error = (error) => ({
  type: "GET_ERROR", // ACTION TYPE
  error: error, // PARAMETER
});

export const deleteSupplierAsync = (id) => {
  return (dispatch) => {
    dispatch(deleteSupplier_Pending());
    fetch("https://62ce2903066bd2b699309018.mockapi.io/api/v1/suppliers/" + id ,{
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(deleteSupplier_Success(data?.id));
      })
      .catch((error) => {
        dispatch(deleteSupplier_Error(error));
      });
  };
};
// CÁC DISPATCH báo trạng thái của ASYNC
// Action Creator
const deleteSupplier_Success = (id) => ({
  type: "DELETE_SUCCESS", // ACTION TYPE
  id: id, // PARAMETER
});

// Action Creator
const deleteSupplier_Pending = () => ({
  type: "DELETE_PENDING", // ACTION TYPE
});

// Action Creator
const deleteSupplier_Error = (error) => ({
  type: "DELETE_ERROR", // ACTION TYPE
  error: error, // PARAMETER
});

const renderRefactor = () => {
  let b= true
}

export default function SupList() {
  const dispatch = useDispatch();
  const { suppliers, loading } = useSelector((state) => state.supplierReducer);
  useEffect(() => {
    dispatch(getSuppliersAsync());
  }, []);
  return (
    <>
      {loading && <small className="text-danger">Loadding...</small>}
      <table className="table table-light table-responsive table-striped table-hover w-75 m-auto border border-secondary">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Branch</th>
            <th scope="col">Address</th>
            <th scope="col">{renderRefactor()}</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier) => {
            return (
              <tr key={supplier?.id}>
                <th scope="row">{supplier?.id}</th>
                <td>{supplier?.name}</td>
                <td>{supplier?.branch}</td>
                <td>{supplier?.address}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(deleteSupplierAsync(supplier?.id))}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
