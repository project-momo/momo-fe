import { CenterSection } from '../../styles/style';
import MyCategory from '../../components/mypage/MyCategory';
import Profile from '../../components/mypage/Profile';
import Point from '../../components/mypage/Point';
import MyMeetings_mypage from '../../components/mypage/MyMeetings_mypage';

const Mypage = () => {
   return (
      <>
         <MyCategory />
         <CenterSection>
            <Profile />
            <Point />
            <MyMeetings_mypage />
         </CenterSection>
      </>
   );
};

export default Mypage;
