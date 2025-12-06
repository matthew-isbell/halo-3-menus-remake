import React from 'react';

export default function selectDrill1({ items }) {

  return (
    <div>
      {items.map((item, index) => {

        const missions = typeof item === 'string' ? item : item.mission;
        const subtext = typeof item === 'string' ? item : item.subtext;
        const image = typeof item === 'string' ? null : item.image;
        return (
          <div
            key={index}
          >
            {missions}
            <br />
            {subtext}
            <br />
            {image && <img src={image.replace(/^public\//, '')}/>}
          </div>
        );
      })}
    </div>
  );
}