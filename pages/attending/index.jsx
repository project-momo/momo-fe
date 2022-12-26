import { CenterSection } from '../../styles/style';
import MyCategory from '../../components/mypage/MyCategory';
import MyMeetings from '../../components/mypage/MyMettings';

const Attending = () => {
  return (
    <>
      <MyCategory />
      <CenterSection>
        <MyMeetings attending />
      </CenterSection>
    </>
  );
};

export default Attending;
