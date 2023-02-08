import { MeetingWrapper } from './mypage.style';
import MyMeetingCard from './MyMeetingCard';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import Link from 'next/link';
import { attendingMeeting_opened, hostMeeting_opened } from '../../atoms/mypage/selector';
import { useEffect } from 'react';
import axios from 'axios';
import { mypageAttendingMeetings, mypageHostMeetings } from '../../atoms/mypage/atoms';

const MyMeetings_mypage = () => {
   const API_URI = process.env.NEXT_PUBLIC_API_URI;
   const setHostMeetings = useSetRecoilState(mypageHostMeetings);
   const setAttendingMeetings = useSetRecoilState(mypageAttendingMeetings);
   const host_openedMeetings = useRecoilValue(hostMeeting_opened);
   const attending_openedMeetings = useRecoilValue(attendingMeeting_opened);

   useEffect(() => {
      axios.defaults.headers.common['Authorization'] = localStorage.getItem('AccessToken');
      // eslint-disable-next-line import/no-named-as-default-member
      axios
         .all([
            axios.get(API_URI + '/mypage/meetings/hosts?page=1&size=20'),
            axios.get(API_URI + '/mypage/meetings/participants?page=1&size=20')
         ])
         .then(
            // eslint-disable-next-line import/no-named-as-default-member
            axios.spread((res1, res2) => {
               setHostMeetings(res1.data);
               setAttendingMeetings(res2.data);
            })
         )
         .catch(err => console.log(err));
   }, []);

   return (
      <>
         {/* 현재 모집중인 모임 */}
         <MeetingWrapper>
            <div className="title">
               <p>
                  현재 모집중인 모임<span>{host_openedMeetings.length}개</span>
               </p>
               <Link href="/meetings" className="seeMore">
                  더보기
               </Link>
            </div>
            {host_openedMeetings.length > 0 ? (
               <MyMeetingCard data={host_openedMeetings[0]} />
            ) : (
               <div className="card-basic empty">
                  <button>모임 찾아보기</button>
               </div>
            )}
         </MeetingWrapper>

         {/* 참여 예정 모임 */}
         <MeetingWrapper>
            <div className="title">
               <p>
                  참여 예정 모임<span>{attending_openedMeetings.length}개</span>
               </p>
               <Link href="/attending" className="seeMore">
                  더보기
               </Link>
            </div>
            {attending_openedMeetings.length > 0 ? (
               <MyMeetingCard data={attending_openedMeetings[0]} participant />
            ) : (
               <div className="card-basic empty">
                  <button>모임 찾아보기</button>
               </div>
            )}
         </MeetingWrapper>
      </>
   );
};

export default MyMeetings_mypage;
