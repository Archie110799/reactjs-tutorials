import React, { useState } from "react";

const textAddress = ["43 Domenic Horse", "92 Run Bear", "75 Chauncey Lion"];

export default function SupForm() {
  const [isDisabled, setIsDisable] = useState(true);
  const [branch, setBranch] = useState("");
  const [address, setAddress] = useState("Please gen address");
  const [name, setName] = useState("");
  const genAddress = (e) => {
    switch (branch) {
      case "001":
        setAddress(textAddress[0]);
        break;
      case "002":
        setAddress(textAddress[1]);
        break;
      default:
        setAddress(textAddress[2]);
        break;
    }
  };

  const handleName = (e) => {
    setName(e.target.value.trim());
  };

  const changeBtn = (e) => {
    if (e.target.value.trim() !== "") {
      setIsDisable(false);
      setBranch(e.target.value.trim());
    } else {
      setIsDisable(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      name: name,
      branch: branch,
      address: address,
    };

    fetch("http://localhost:9222/about/1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("success", data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <>
      <form className="row g-3 w-50 m-auto" onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Name"
            onChange={handleName}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput2" className="form-label">
            Branch
          </label>
          <small className="d-block ml-3 text-secondary">
            Plese enter Branch.No
          </small>
          <div className="row">
            <div className="col">
              <input
                className="form-control"
                id="exampleFormControlInput2"
                placeholder="Branch.No"
                maxLength={5}
                onChange={changeBtn}
              />
            </div>
            <div className="col-3">
              <span
                className={`btn btn-info d-block mt-2 p-2 ${
                  isDisabled ? " disabled" : ""
                }`}
                onClick={genAddress}
              >
                Gen Address
              </span>
            </div>
          </div>

          <input
            className="form-control"
            type="text"
            value={address}
            aria-label="readonly input example"
            readOnly
          ></input>
        </div>

        <button className="btn btn-success w-50 m-auto">Submit</button>
      </form>
    </>
  );
}
