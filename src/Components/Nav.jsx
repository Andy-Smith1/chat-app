import React, { useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

const Nav = () => {
  const { user, setUser } = useContext(UserContext);
  const [userEntry, setUserEntry] = useState("");


  function handleSubmit(e) {
    e.preventDefault();
    setUser({
      loggedIn: true,
      username: userEntry
    })
  }

  function handleInputChange(e) {
    setUserEntry(e.target.value);
  }

  return (
    <div className="Nav">
      <h2>sup</h2>
      {user.loggedIn ? (
        <p>Hi {user.username}!</p>
      ) : (
        <form onSubmit={(e) => {
          handleSubmit(e);
        }}>
          <input
            name="username-entry"
            onChange={(e) => {
              handleInputChange(e);
            }}
            type="text"
          />
          <button>Log in</button>
        </form>
      )}
    </div>
  );
};

export default Nav;
