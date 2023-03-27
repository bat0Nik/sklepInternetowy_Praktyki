import React from "react";
import { Card } from "./card/card";

export const ListOfCards = (props) => {

  return (
    
    <div className="cards">
      {props.elements?.length > 0 ? (
        props.elements.map((element) => (
          <Card data={element} key={element.id} />
        ))
      ) : (
        <div className="empty">No items found </div>
      )}
    </div>
  );
};
