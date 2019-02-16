import React from "react";
import ListItem from "./ListItem";
// import "./StarWars.css";

const CharacterList = ({ data, pagination, previous, next }) => {
  return (
    <div>
      <ul className="character-list">
        {data.map(element => (
          <ListItem charData={element} key={element.created} />
        ))}
      </ul>
      <div className="pagination">
        <button
          onClick={() => {
            pagination(previous);
          }}
          disabled={!previous}
        >
          Previous
        </button>
        <button
          onClick={() => {
            pagination(next);
          }}
          disabled={!next}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CharacterList;
