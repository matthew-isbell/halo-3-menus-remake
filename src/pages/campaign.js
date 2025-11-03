import React from 'react';
import campaignData from '../data/campaignMenuData.json';
import campaignMissionData from '../data/campaignMissionData.json';
import SelectDrill1 from '../components/SelectDrill1';
import SwitchLobby from '../components/SwitchLobby';
import switchLobbyData from '../data/switchLobby.json';

export async function getStaticProps() {
  return {
    props: {
      items: campaignData.items,
      missions: campaignMissionData.items,
      switchLobby: switchLobbyData.items
    },
  };
}

export default function Campaign({ items, missions, switchLobby }) {
  return (
    <>
      {/* background video */}
      <video
        src="/backgrounds/campaignvid.mp4"
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
        autoPlay
        loop
        muted
      />
      
      {/* mission select */}
      {/* <SelectDrill1 items={missions} /> */}

      {/* switch lobby select */}
      <SwitchLobby items={switchLobbyData.items} />

      <div style={{ position: 'fixed', left: '0', right: '0', padding: '12%' }}>
        {items.map((item, index) => {
          const label = typeof item === 'string' ? item : item.label;
          return (
            <div key={index}>
              {label}
            </div>
          );
        })}
      </div>
    </>
  );
}