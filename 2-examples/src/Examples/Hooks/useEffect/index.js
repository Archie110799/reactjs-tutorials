import React, { useState, useEffect } from "react";
import axios from "axios";

function UseEffect() {
  const [users, setUsers] = useState([]);

  async function fetchData() {
    try {
      let response = await axios("/usersLead");
      let tempUsers = await response.data;
      console.log(response);
      setUsers(tempUsers);
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const RenderUserItem = ({ user }) => {
    return (
      <div className="card m-3" style={{ width: "20%" }}>
        <img
          className="card-img-top"
          src={user?.avatar}
          alt={user?.name}
          style={{ objectFit: "contain" }}
        ></img>
        <div className="card-body">
          <h5 className="card-title">{user?.name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a
            href="https://getbootstrap.com/docs/4.0/components/card/"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Go somewhere
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="d-flex flex-wrap justify-content-around">
      {users.map((user, index) => {
        return <RenderUserItem key={`user-${index}`} user={user} />;
      })}
    </div>
  );
}

export default UseEffect;
