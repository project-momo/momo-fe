import { CenterSection } from '../../styles/style';
import MyCategory from '../../components/mypage/MyCategory';
import MyMettings_host from '../../components/mypage/MyMettings_host';

const Meetings = () => {
   return (
      <>
         <MyCategory />
         <CenterSection>
            <MyMettings_host />
         </CenterSection>
      </>
   );
};

export default Meetings;
