import React from "react";
import './styles.css'
import { useForm } from "react-hook-form";

export default function ReactHookForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          placeholder="firstName"
          {...register("firstName", { required: true })}
        />
        {errors.firstName?.type === "required" && <p>First name is required</p>}
      </div>

      <div>
        <input
          placeholder="lastName"
          {...register("lastName", { required: true })}
        />
        {errors.lastName && <p>Last name is required</p>}
      </div>

      <div>
        <input
          {...register("mail", {
            required: "Email Address is required",
            pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
          })}
        />
        <p>{errors.mail?.message}</p>
        <p>{errors.mail?.type === "required" ? "required" : ""}</p>
        <p>{errors.mail?.type === "pattern" ? "pattern" : ""}</p>
      </div>

      {/* {Object.keys(errors).length !== 0 && (
        <ul className="list-group">
          {errors.firstName?.type === "required" && (
            <li className="list-group-item">First name is required</li>
          )}

          {errors.lastName && (
            <li className="list-group-item">Last name is required</li>
          )}

          {errors.mail.message && (
            <li className="list-group-item">{errors.mail.message}</li>
          )}
        </ul>
      )} */}

      <input type="submit" />
    </form>
  );
}
