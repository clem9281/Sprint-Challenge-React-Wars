import React from "react";
import ListItem from "./ListItem";
// import "./StarWars.css";

const CharacterList = props => {
  return (
    <div>
      <ul className="character-list">
        {props.data.map(element => (
          <ListItem charData={element} key={element.created} />
        ))}
      </ul>
      <div className="pagination">
        <button
          onClick={() => {
            props.pagination(props.previous);
          }}
          disabled={!props.previous}
        >
          Previous
        </button>
        <button
          onClick={() => {
            props.pagination(props.next);
          }}
          disabled={!props.next}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CharacterList;
