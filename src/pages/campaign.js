import React from 'react';
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
      {/* <SwitchLobby items={switchLobbyData.items} /> */}

      {/* difficulty select */}
      {/* <DifficultySelect items={diffSelect} /> */}

      <div className="homeMenu" style={{ position: 'fixed', }}>

        <h1 style={{ color: 'white' }}>Campaign Lobby</h1>

        {items.map((item, index) => {
          const label = typeof item === 'string' ? item : item.label;
          return (
            <div class="item-text" key={index}>
              {label}
            </div>
          );
        })}
      </div>
    </>
  );
}