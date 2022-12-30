import { CenterSection } from '../../styles/style';
import MyCategory from '../../components/mypage/MyCategory';
import Profile from '../../components/mypage/Profile';
import Point from '../../components/mypage/Point';
import { useSetRecoilState } from 'recoil';
import { myProfile } from '../../atoms/mypage/atoms';
import { useEffect } from 'react';
import axios from 'axios';
import { mypageProfile } from '../../dummy/mypage/dummy';
import MyMeetings_mypage from '../../components/mypage/MyMettings_mypage';

const Mypage = () => {
   const setMyInfo = useSetRecoilState(myProfile);

   useEffect(() => {
      // 통신
      // axios.get('/mypage/profile')
      // .then((res) => {
      //    setMyInfo(res);
      // })
      const fetchData = mypageProfile;
      setMyInfo(fetchData);
   },[])

   return (
      <>
         <MyCategory />
         <CenterSection>
            <Profile/>
            <Point />
            <MyMeetings_mypage />
         </CenterSection>
      </>
   );
};

export default Mypage;
