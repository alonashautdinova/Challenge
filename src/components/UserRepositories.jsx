import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UserRepositories = ({ repositories }) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">User Repositories</h2>
              <ul className="list-group list-group-flush">
                {repositories.map((repo) => (
                  <li key={repo.id} className="list-group-item">
                    <a href={repo.html_url}>{repo.name}</a>: {repo.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRepositories;
