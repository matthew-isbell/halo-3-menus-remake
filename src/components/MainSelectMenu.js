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
    <div style={{ position: 'fixed', bottom: '0', left: '0', right: '0', padding: '10px' }}>
      {items.map((item, index) => {
        const label = typeof item === 'string' ? item : item.label;
        const isClickable = typeof item === 'object' && item.redirect;
        return (
          <div
            key={index}
            onClick={() => handleClick(item)}
          >
            {label}
          </div>
        );
      })}
    </div>
  );
}