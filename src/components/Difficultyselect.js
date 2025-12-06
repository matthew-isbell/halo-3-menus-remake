import React from 'react';

export default function difficultySelect({ items }) {

  return (
    <div>

        {console.log(items)}

      {items.map((item, index) => {

        return (
          <div
            key={index}
          >
            {item.difficulty}
            <br />
            {item.subtext}
            <br />
            <img src={item.image} alt={item.difficulty} />
          </div>
        );
      })}
    </div>
  );
}