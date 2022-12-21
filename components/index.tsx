import { useRecoilState } from 'recoil';
import { nameState } from '../atoms';

const A = () => {
  const [mystate, setMystate] = useRecoilState(nameState);

  const click = () => {
    setMystate(mystate + 1);
    console.log('#1', mystate);
  };

  return <button onClick={click}>a</button>;
};

export default A;
