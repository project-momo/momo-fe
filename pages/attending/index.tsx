import { CenterSection } from '../../styles/style';
import MyCategory from '../../components/mypage/MyCategory';
import MyMeetings_attending from '../../components/mypage/MyMeetings_attending';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { mypageAttendingMeetings } from '../../atoms/mypage/atoms';
import { api } from '../../util/token';

const Attending = () => {
   const API_URI = process.env.NEXT_PUBLIC_API_URI;
   const setAttendingMeetings = useSetRecoilState(mypageAttendingMeetings);

   useEffect(() => {
      // 통신
      api.get(API_URI + '/mypage/meetings/participants?page=1&size=20')
         .then(res => {
            setAttendingMeetings(res.data);
         })
         .catch(err => console.log(err));
   }, []);

   return (
      <>
         <MyCategory />
         <CenterSection>
            <MyMeetings_attending />
         </CenterSection>
      </>
   );
};

export default Attending;
