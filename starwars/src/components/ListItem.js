import React from "react";
import "./StarWars.css";

const ListItem = props => {
  const { name, birth_year } = props.charData;
  return (
    <li className="character-item">
      <h2>{name}</h2>
      <p>Born: {birth_year}</p>
    </li>
  );
};

export default ListItem;
