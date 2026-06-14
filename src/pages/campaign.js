import React, { useMemo, useState } from 'react';
import campaignData from '../data/campaignMenuData.json';
import campaignMissionData from '../data/campaignMissionData.json';
import SelectDrill1 from '../components/SelectDrill1';
import SwitchLobby from '../components/SwitchLobby';
import switchLobbyData from '../data/switchLobby.json';
import difficultyData from '../data/difficulty.json';
import DifficultySelect from '../components/Difficultyselect';

export async function getStaticProps() {
  return {
    props: {
      items: campaignData.items,
      missions: campaignMissionData.items,
      switchLobby: switchLobbyData.items,
      diffSelect: difficultyData.items,
    },
  };
}

export default function Campaign({ items, missions, switchLobby, diffSelect }) {
  const [activePanel, setActivePanel] = useState(null);

  const renderPanel = useMemo(() => {
    switch (activePanel) {
      case 'SWITCH LOBBY':
        return <SwitchLobby items={switchLobby} />;
      case 'MISSION:':
        return <SelectDrill1 items={missions} />;
      case 'DIFFICULTY:':
        return <DifficultySelect items={diffSelect} />;
      case 'NETWORK:':
        return <p style={{ color: 'white' }}>Network UI coming soon…</p>;
      default:
        return null;
    }
  }, [activePanel, diffSelect, missions, switchLobby]);

  const handleMenuClick = (label) =>
    setActivePanel((prev) => (prev === label ? null : label));

  return (
    <>
      {/* background vid */}
      <video
        src="../backgrounds/campaignvid.mp4"
        autoPlay
        loop
        muted
        style={{
          position: 'fixed',
          left: '0',
          right: '0',
          top: '0',
          bottom: '0',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: '-1'
        }}
      />

      <div className="homeMenu" style={{ position: 'fixed' }}>
        <h1 style={{ color: 'white', marginLeft: 10 }}>Campaign Lobby</h1>

        {/* looping through all campaign options */}
        {items.map((item, index) => {
          const label = typeof item === 'string' ? item : item.label;
          return (
            <div
              key={index}
              className="item-text"
              onClick={() => handleMenuClick(label)}
              style={{ cursor: 'pointer', color: activePanel === label ? '#ffffffff' : '' }}
            >
              {label}
            </div>
          );
        })}

      </div>

      <div style={{ marginTop: '10%' }}>
        {renderPanel}
      </div>
      
    </>
  );
}