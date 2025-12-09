import React from 'react';

export default function switchLobby({ items }) {

  return (
    <div>
      {items.map((item, index) => {

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