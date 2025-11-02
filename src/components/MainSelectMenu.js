import React from 'react';
import campaignData from '../data/mainMenuData.json';

console.log("campaignData:", campaignData);

export default function MainSelectMenu({ items }) {
  return (
    <div>
      {items.map((label) => (
        <div key={label}>{label}</div>
      ))}
    </div>
  );
}