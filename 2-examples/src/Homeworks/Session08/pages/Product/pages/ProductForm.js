import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const ERROR_EMAIL = {
  required: "Email Address is required",
  pattern: "Please include an '@' in the email address ",
};

export default function ProductForm() {
  const [cities, setCities] = useState([]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue
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

  useEffect(() => {
    fetchData();
  }, []);

  const cityWatch = watch("city");
  const districtWatch = watch("district");

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <>
      <form className="row g-3 mx-auto mt-3 w-50" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-md-6">
          <label htmlFor="inputEmail" className="form-label">
            Email
          </label>
          <input
            className="form-control"
            id="inputEmail"
            placeholder="Email"
            {...register("email", {
              required: ERROR_EMAIL?.required,
              pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
            })}
          />
          <p>{errors.email?.message}</p>
          <p>{errors.email?.type === "pattern" ? ERROR_EMAIL?.pattern : ""}</p>
        </div>

        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword4"
            {...register("password", { required: true })}
          />
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
