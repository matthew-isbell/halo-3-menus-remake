import React from 'react';
import { useRouter } from 'next/router';

export default function MainSelectMenu({ items }) {
  const router = useRouter();

  const handleClick = (item) => {
    if (item.redirect) {
      // Assuming redirect is like "campaign.js", strip ".js" and prepend "/"
      const path = `/${item.redirect.replace('.js', '')}`;
      router.push(path);
    }
  };

  return (
    <div style={{ position: 'fixed', left: '0', right: '0', padding: '10px' }}>
      {items.map((item, index) => {
        const label = typeof item === 'string' ? item : item.label;
        const isDisabled = item.disabled || (typeof item === 'string');


        return (
          <div
            className="item-text"
            key={index}
            onClick={() => !isDisabled && handleClick(item)}
            style={isDisabled ? { 
              pointerEvents: 'none',
              opacity: 0.5, //greys out the title
              filter: 'grayscale(100%)',
              borderBottom: '1px solid grey'
            } : {}}
          >
            {label}
          </div>
        );
      })}
    </div>
  );
}