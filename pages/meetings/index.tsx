import { CenterSection } from '../../styles/style';
import MyCategory from '../../components/mypage/MyCategory';
import MyMeetings_host from '../../components/mypage/MyMettings_host';
import { useEffect } from 'react';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { mypageHostMeetings } from '../../atoms/mypage/atoms';

const Meetings = () => {
   const API_URI = process.env.NEXT_PUBLIC_API_URI;
   const setHostMeetings = useSetRecoilState(mypageHostMeetings);

   useEffect(() => {
      // 통신
      axios.get(API_URI + '/mypage/meetings/hosts?page=1&size=20',{
         headers: {
            Authorization: localStorage.getItem('AccessToken')
         }
      }) 
      .then((res) => {
            setHostMeetings(res.data);
      })
      .catch((err) => console.log(err));

   },[])


   return (
      <>
         <MyCategory />
         <CenterSection>
            <MyMeetings_host />
         </CenterSection>
      </>
   );
};

export default Meetings;
