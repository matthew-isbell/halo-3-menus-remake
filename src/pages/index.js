import MainMenu from 'components/MainSelectMenu';
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

export default function Home({ menu, campaign }) {
  return (
    <div>
      <MainMenu items={menu} />
    </div>
  );
}
