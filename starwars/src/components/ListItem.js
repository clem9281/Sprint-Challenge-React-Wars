import React from "react";
import "./StarWars.css";

const ListItem = props => {
  return (
    <li className="character-item">
      <h2>{props.charData.name}</h2>
      <p>Born: {props.charData.birth_year}</p>
    </li>
  );
};

export default ListItem;
