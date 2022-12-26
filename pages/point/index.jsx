import { CenterSection } from '../../styles/style';
import MyCategory from '../../components/mypage/MyCategory';
import Point from '../../components/mypage/Point';
import PointList from '../../components/mypage/PointList';

const MyPoint = () => {
  return (
    <>
      <MyCategory />
      <CenterSection>
        <Point myPoint />
        <PointList />
      </CenterSection>
    </>
  );
};

export default MyPoint;
