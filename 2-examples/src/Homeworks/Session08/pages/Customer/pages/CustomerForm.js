import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const ERROR_EMAIL = {
  required: "Email Address is required",
  pattern: "Please include an '@' in the email address ",
};

export default function CustomerForm() {
  let { id } = useParams();
  const [cities, setCities] = useState([]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
  } = useForm();

  let url = "https://provinces.open-api.vn/api/?depth=3";
  async function fetchData() {
    try {
      let response = await axios(url);
      let temp = await response.data;
      setCities(temp);
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }

  async function fetchDataCustomer(urlCustomer) {
    try {
      let response = await axios.get(urlCustomer);
      let temp = await response.data;
      if (id) {
        setValue("email", temp?.email);
        setValue("address1", temp?.address);
        setValue("address2", temp?.address2);
        setValue("city", temp?.city);
        setValue("district", temp?.district);
        setValue("commune", temp?.commune);
      }
      return temp;
    } catch (err) {
      console.log("Error: ", err.message);
      return {};
    }
  }

  useEffect(() => {
    if (id) {
      let urlCustomer =
        "https://62ce2903066bd2b699309018.mockapi.io/api/v1/customer/" + id;
      let temp = fetchDataCustomer(urlCustomer);
      temp.then(function (response) {
        return response;
      });
    }

    fetchData();
  }, []);

  const cityWatch = watch("city");
  const districtWatch = watch("district");

  const onSubmit = (data, e) => {
    e.preventDefault();
    if (id) {
      //update
      putData(data);
      console.log("update", data);
    } else {
      //create
      postData(data);
      console.log("create", data);
    }
  };

  const postData = (data) => {
    let dumpData = {
      name: data?.address1,
      postCode: "58472",
      address: data?.address2,
      dob: "11/01/1995",
      email: data?.email,
      gender: false,
      phone: "1-832-736-9208 x651",
    };
    axios
      .post(
        "https://62ce2903066bd2b699309018.mockapi.io/api/v1/customer",
        dumpData
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const putData = (data) => {
    let dumpData = {
      name: "Darlene Barrows1",
      postCode: "1111",
      address: "address 2",
      dob: 1658206805,
      email: "Kaia77@hotmail.com",
      gender: false,
      phone: "1-832-736-9208 x651",
    };
    axios
      .put(
        "https://62ce2903066bd2b699309018.mockapi.io/api/v1/customer/1",
        dumpData
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <form
        className="row g-3 mx-auto mt-3 w-50"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={!id ? `col-md-6` : "col-12"}>
          <label htmlFor="inputEmail" className="form-label">
            Email
          </label>
          <input
            className="form-control"
            id="inputEmail"
            placeholder="Email"
            ref={() => register({ name: "email" })}
            {...register("email", {
              required: ERROR_EMAIL?.required,
              pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
            })}
          />
          <p>{errors.email?.message}</p>
          <p>{errors.email?.type === "pattern" ? ERROR_EMAIL?.pattern : ""}</p>
        </div>

        <div className="col-md-6">
          {!id && (
            <>
              <label htmlFor="inputPassword4" className="form-label">
                Password
              </label>
              <input
                type="password"
                className={`form-control`}
                id="inputPassword4"
                {...register("password", { required: true })}
              />
            </>
          )}
        </div>

        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            {...register("address1", { required: true })}
          />
        </div>

        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">
            Address 2
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
            {...register("address2", { required: true })}
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">
            City
          </label>
          <select
            id="inputState"
            defaultValue=""
            className="form-select m-2 pb-2"
            {...register("city", { required: true })}
          >
            <option value="">Choose...</option>
            {cities.map((item) => {
              return <option key={`city-${item?.code}`}>{item?.name}</option>;
            })}
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="inputDistrict" className="form-label">
            District
          </label>
          <select
            id="inputDistrict"
            className="form-select m-2 pb-2"
            {...register("district", { required: true })}
          >
            <option value="">Choose</option>
            {cities.map((item) => {
              return item?.name === cityWatch
                ? item?.districts.map((district) => {
                    return (
                      <option key={`districts-${district?.code}`}>
                        {district?.name}
                      </option>
                    );
                  })
                : null;
            })}
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="inputCommune" className="form-label">
            Commune
          </label>
          <select
            id="inputCommune"
            defaultValue=""
            className="form-select m-2 pb-2"
            {...register("commune", { required: true })}
          >
            <option value="">Choose...</option>
            {cities.map((item) => {
              return item?.name === cityWatch
                ? item?.districts.map((district) => {
                    return district?.name === districtWatch
                      ? district?.wards.map((ward) => {
                          return (
                            <option key={`ward-${ward?.code}`}>
                              {ward?.name}
                            </option>
                          );
                        })
                      : null;
                  })
                : null;
            })}
          </select>
        </div>

        <div className="col-12">
          <div className="form-check text-start mx-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </>
  );
}
