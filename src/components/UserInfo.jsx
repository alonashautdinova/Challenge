import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UserInfo = ({ userData }) => {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-3">
          <img
            src={userData.avatar_url}
            className="img-fluid rounded-circle"
            alt="User Avatar"
          />
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Fullname: {userData.name}</h5>
              <p className="card-text">Username: {userData.login}</p>
              <p className="card-text">Location: {userData.location}</p>
              <p className="card-text">Email Address: {userData.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
