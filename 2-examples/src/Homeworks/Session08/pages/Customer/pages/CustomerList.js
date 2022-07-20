import React, { useState, useEffect } from "react";
import axios from "axios";
import FeatureField from "../../components/FeatureField";
import toast, { Toaster } from "react-hot-toast";

export default function CustomerList() {
  //   function getUserAccount() {
  //     return axios.get("/user/12345");
  //   }

  //   function getUserPermissions() {
  //     return axios.get("/user/12345/permissions");
  //   }

  //   Promise.all([getUserAccount(), getUserPermissions()]).then(function (results) {
  //     const acct = results[0];
  //     const perm = results[1];
  //   });

  const [customerList, setCustomerList] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  let url = "https://62ce2903066bd2b699309018.mockapi.io/api/v1/customer";
  async function fetchData() {
    try {
      setIsLoad(true);
      let response = await axios.get(url, {
        params: {
          page: 1,
          limit: 10,
        },
      });
      let temp = await response.data;
      setIsLoad(false);
      setCustomerList(temp);
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, []);

  const deleteData = (id) => {
    axios
      .delete(
        "https://62ce2903066bd2b699309018.mockapi.io/api/v1/customer/" + id
      )
      .then(function (response) {
        toast.success("Successfully deleted!");
        fetchData();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      {isLoad && "Loadding..."}
      {!isLoad && (
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {customerList.map((customer, index) => {
              return (
                <tr key={`customer-${customer?.id}`}>
                  <th scope="row">{index + 1}</th>
                  <td>{customer?.name}</td>
                  <td>{customer?.email}</td>
                  <td>{customer?.address}</td>
                  <td>
                    <FeatureField
                      itemId={customer?.id}
                      name="customer"
                      onDelete={(e) => deleteData(customer?.id, e)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}
