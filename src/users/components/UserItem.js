import React from "react";
import './UserItem.css';
const UserItem = (props) => {
  return (
    <li className="user-item">
      <div className="user-item__content">
        <div className="user-item__image">
            <img className="user-item__image" src={props.image} alt={props.name}/>
        </div>
        <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>{props.totalExpenses} €</h3>
        </div>
      </div>
    </li>
  );
};

export default UserItem;