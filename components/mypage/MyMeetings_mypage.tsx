import { MeetingWrapper } from './mypage.style';
import MyMeetingCard from './MyMeetingCard';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import Link from 'next/link';
import { attendingMeeting_opened, hostMeeting_opened } from '../../atoms/mypage/selector';
import { useEffect } from 'react';
import { mypageAttendingMeetings, mypageHostMeetings } from '../../atoms/mypage/atoms';
import { api } from '../../util/token';

const MyMeetings_mypage = () => {
   const API_URI = process.env.NEXT_PUBLIC_API_URI;
   const setHostMeetings = useSetRecoilState(mypageHostMeetings);
   const setAttendingMeetings = useSetRecoilState(mypageAttendingMeetings);
   const host_openedMeetings = useRecoilValue(hostMeeting_opened);
   const attending_openedMeetings = useRecoilValue(attendingMeeting_opened);

   useEffect(() => {
      api.get(API_URI + '/mypage/meetings/hosts?page=1&size=20').then(res => setHostMeetings(res.data));
      api.get(API_URI + '/mypage/meetings/participants?page=1&size=20').then(res => setAttendingMeetings(res.data));
   }, []);

   return (
      <>
         {/* 현재 모집중인 모임 */}
         <MeetingWrapper>
            <div className="title">
               <p>
                  현재 모집중인 모임<span>{host_openedMeetings.length}개</span>
               </p>
               {host_openedMeetings.length > 0 && (
                  <Link href="/meetings" className="seeMore">
                     더보기
                  </Link>
               )}
            </div>
            {host_openedMeetings.length > 0 ? (
               <MyMeetingCard data={host_openedMeetings[0]} />
            ) : (
               <div className="card-basic empty">
                  <Link href="/meetings" className="seeMore">
                     모임 찾아보기
                  </Link>
                  {/* <button>모임 찾아보기</button> */}
               </div>
            )}
         </MeetingWrapper>

         {/* 참여 예정 모임 */}
         <MeetingWrapper>
            <div className="title">
               <p>
                  참여 예정 모임<span>{attending_openedMeetings.length}개</span>
               </p>
               {attending_openedMeetings.length > 0 && (
                  <Link href="/attending" className="seeMore">
                     더보기
                  </Link>
               )}
            </div>
            {attending_openedMeetings.length > 0 ? (
               <MyMeetingCard data={attending_openedMeetings[0]} participant />
            ) : (
               <div className="card-basic empty">
                  <Link href="/" className="seeMore">
                     모임 찾아보기
                  </Link>
               </div>
            )}
         </MeetingWrapper>
      </>
   );
};

export default MyMeetings_mypage;
