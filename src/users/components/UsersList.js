import React from "react";
import "./UsersList.css";
import UserItem from "./UserItem";

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="statusMessage">
        <h3>Sorry, no users found!</h3>
      </div>
    );
  } else {
    return (
      <ul className="users-list">
        {props.items.map((user) => {
          return (
            <UserItem
              key={user.id}
              id={user.id}
              name={user.name}
              image={user.image}
              totalExpenses={user.totalExpenses}
            />
          );
        })}
      </ul>
    );
  }
};

export default UsersList;
