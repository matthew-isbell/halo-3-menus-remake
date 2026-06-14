import React, { useState } from 'react';

export default function selectDrill1({ items }) {
  const [selectedMission, setSelectedMission] = useState(0);

  const selected = items[selectedMission];
  const missionName = typeof selected === 'string' ? selected : selected.mission;
  const subtext = typeof selected === 'string' ? '' : selected.subtext;
  const image = typeof selected === 'string' ? null : selected.image;

  return (
    <div style={{ position: 'relative', display: 'flex', gap: '20%', padding: '20px', color: 'white', background: 'rgb(45, 65, 97)' }}>
      
      {/* Left side - Mission list */}
      <div style={{ marginLeft: '10%', flex: '0 0 300px' }}>
        {items.map((item, index) => {
          const missionLabel = typeof item === 'string' ? item : item.mission;
          return (
            <div
              className="item-text" 
              key={index}
              onClick={() => setSelectedMission(index)}
              style={{
                cursor: 'pointer',
                padding: '8px 0px',
                fontSize: '18px',
                color: selectedMission === index ? 'rgb(255, 255, 255)' : 'rgba(255, 255, 255, 0.6)',
                textDecoration: selectedMission === index ? 'underline' : 'none',
                transition: 'color 0.2s'
              }}
            >
              {missionLabel}
            </div>
          );
        })}
      </div>

      {/* Right side - Image and subtext */}
      <div style={{ background: '#1c1c5361', padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        {image && (
          <img 
            src={image.replace(/^public\//, '')} 
            style={{ maxWidth: '100%', maxHeight: '150px', marginBottom: '0px' }}
          />
        )}
        {subtext && (
          <p className="item-text" style={{ textAlign: 'center', marginTop: '10px' }}>
            {subtext}
          </p>
        )}
        <div style={{display: 'flex', width: '100%', justifyContent: 'space-around'}}>
          <div>
            <div></div>
            <p>SOLO</p>
          </div>

          <div>
            <div></div>
            <p>CO-OP</p>
          </div>
        </div>
      </div>
    </div>
  );
}