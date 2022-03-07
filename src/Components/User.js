import React, { useContext } from "react";
import { AppContext } from "./context";

const User = ({ user }) => {
  const { dispatchUserEvent } = useContext(AppContext);

  const handleRemoveUser = () => {
    dispatchUserEvent("REMOVE_USER", { userId: user.id });
  };
  return (
    <div
      style={{
        border: "1px solid gray",
        display: "inline-block",
        padding: "10px",
      }}
    >
      <h3>{user.name}</h3>
      <h4>{user.age}</h4>
      <div>
        <small>{user.bio}</small>
        <button onClick={handleRemoveUser}>Delete user</button>
      </div>
    </div>
  );
};

export default User;
