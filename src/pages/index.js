import MainMenu from '../components/MainSelectMenu';
import menuData from '../data/mainMenuData.json';
import campaignData from '../data/campaignMenuData.json';

const noramlized = menuData.items.map((item) => {
  if (typeof item === 'string') {
    return { label: item, disabled: true};
  }
  return item;
});


export async function getStaticProps() {
  return {
    props: {
      menu: noramlized,
      campaign: campaignData.items,
    },
  };
}

export default function Home({ menu }) {

  return (

    <>
    <video
    src="../backgrounds/mainmenuvid.mp4"
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

    {/* adding some extra hard-coded styling specifically for landing page only */}
    <div className="homeMenu"  style={{ position: 'fixed', height: '45%', width: '21%'}}>
      <MainMenu items={menu} />

      {/* <div style={{position: 'fixed', opacity: 0.5, filter: 'grayscale(100%)'}}>1.2</div> */}
    </div>
    </>
  );
}
