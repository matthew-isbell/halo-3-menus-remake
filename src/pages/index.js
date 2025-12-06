import MainMenu from '../components/MainSelectMenu';
import menuData from '../data/mainMenuData.json';
import campaignData from '../data/campaignMenuData.json';

export async function getStaticProps() {
  return {
    props: {
      menu: menuData.items,
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

    <div className="homeMenu"  style={{ position: 'fixed' }}>
      <MainMenu items={menu} />
    </div>
    </>
  );
}
