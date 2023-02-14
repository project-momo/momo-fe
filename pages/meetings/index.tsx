import { CenterSection } from '../../styles/style';
import MyCategory from '../../components/mypage/MyCategory';
import MyMeetings_host from '../../components/mypage/MyMeetings_host';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { mypageHostMeetings } from '../../atoms/mypage/atoms';
import axios from 'axios';

const Meetings = () => {
   const API_URI = process.env.NEXT_PUBLIC_API_URI;
   const setHostMeetings = useSetRecoilState(mypageHostMeetings);

   useEffect(() => {
      // 통신
      axios.defaults.headers.common['Authorization'] = localStorage.getItem('AccessToken');
      axios
         .get(API_URI + '/mypage/meetings/hosts?page=1&size=20')
         .then(res => {
            setHostMeetings(res.data);
         })
         .catch(err => alert(err.response.data.message));
   }, []);

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
