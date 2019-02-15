import React from "react";
import ListItem from "./ListItem";

const CharacterList = props => {
  console.log(props.data);
  return (
    <div>
      <ul className="character-list">
        {props.data.map(element => (
          <ListItem charData={element} key={element.created} />
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
