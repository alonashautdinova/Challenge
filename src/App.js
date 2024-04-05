import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import UserInfo from "./components/UserInfo";
import UserRepositories from "./components/UserRepositories";

const App = () => {
  const [userData, setUserData] = useState(null);
  const [userRepositories, setUserRepositories] = useState([]);
  const [username, setUsername] = useState("alonashautdinova");

  const CLIENT_ID = process.env.CLIENT_ID;
  const CLIENT_SECRET = process.env.CLIENT_SECRET;

  const fetchUserData = async (username) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&sort=created`
      );
      setUserData(response.data);
      fetchUserRepositories(username);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const fetchUserRepositories = async (username) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&sort=created`
      );
      setUserRepositories(response.data);
    } catch (error) {
      console.error("Error fetching user repositories:", error);
    }
  };

  useEffect(() => {
    fetchUserData(username);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newUsername = e.target.elements.username.value;
    setUsername(newUsername);
    fetchUserData(newUsername);
  };

  return (
    <div className="main-container">
      <div className="user-search">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Enter GitHub username"
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <hr />
      <div className="user-info">
        {userData && <UserInfo userData={userData} />}
      </div>
      <hr />
      <div className="user-repositories">
        <UserRepositories repositories={userRepositories} />
      </div>
    </div>
  );
};

export default App;
