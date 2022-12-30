import { CenterSection } from '../../styles/style';
import MyCategory from '../../components/mypage/MyCategory';
import MyMeetings_attending from '../../components/mypage/MyMettings_attending';

const Attending = () => {
   return (
      <>
         <MyCategory />
         <CenterSection>
            <MyMeetings_attending/>
         </CenterSection>
      </>
   );
};

export default Attending;
