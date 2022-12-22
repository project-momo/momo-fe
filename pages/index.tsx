import type { NextPage } from 'next';
import A from '../components/index';
import { Button } from '../stories/Button';
import { Header } from '../stories/Header/Header';

const Home: NextPage = () => {
  const onLogin = () => {

  }
  return (
  <>
  <Button label='' disabled={true} size="bigThin" priceLabel="2,000"/>
  <Header onLogin={onLogin} user={false} goMypage={function (): void { } }/>
  </>);
};

export default Home;
