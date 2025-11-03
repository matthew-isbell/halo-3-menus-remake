import React from 'react';

export default function switchLobby({ items }) {

    console.log("items: ", items);


  return (
    <div>
      {items.map((item, index) => {

        console.log("item: ", item);
        console.log("index: ", index);
        return (
          <div
            key={index}
          >
            {item.gamemode}
            <br />
            {item.subtext}
          </div>
        );
      })}
    </div>
  );
}