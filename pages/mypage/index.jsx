import { CenterSection } from '../../styles/style';
import MyCategory from '../../components/mypage/MyCategory';
import Profile from '../../components/mypage/Profile';
import Point from '../../components/mypage/Point';
import MyMeetings from '../../components/mypage/MyMettings';

const Mypage = () => {
  return (
    <>
      <MyCategory />
      <CenterSection>
        <Profile />
        <Point />
        <MyMeetings preview />
      </CenterSection>
    </>
  );
};

export default Mypage;
