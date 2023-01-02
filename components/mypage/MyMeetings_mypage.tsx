import { MeetingWrapper } from './mypage.style';
import MyMeetingCard from './MyMeetingCard';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { mypageAttendingMeetings } from '../../atoms/mypage/atoms';
import Link from 'next/link';
import { attendingMeeting_opened, hostMeeting_opened } from '../../atoms/mypage/selector';

const MyMeetings_mypage = () => {
   const host_openedMeetings = useRecoilValue(hostMeeting_opened);
   const attending_openedMeetings = useRecoilValue(attendingMeeting_opened);
   // const host_openedMeetings: any = hostMeetings.filter((meeting:any) => meeting.meetingStatus === true);
   // const attending_openedMeetings: any = hostMeetings.filter((meeting:any) => meeting.meetingStatus === false);

   

   return (
      <>
         {/* 현재 모집중인 모임 */}
         <MeetingWrapper>
            <div className="title">
               <p>
                  현재 모집중인 모임<span>{host_openedMeetings.length}개</span>
               </p>
               <Link href="/meetings" className='seeMore'>더보기</Link>
            </div>
            {host_openedMeetings.length > 0 ? <MyMeetingCard data={host_openedMeetings[0]} /> :
               <div className="card-basic empty">
                  <button>모임 찾아보기</button>
               </div>
            }
         </MeetingWrapper>

         {/* 참여 예정 모임 */}
         <MeetingWrapper>
            <div className="title">
               <p>
                  참여 예정 모임<span>{attending_openedMeetings.length}개</span>
               </p>
               <Link href="/attending" className='seeMore'>더보기</Link>
            </div>
            {attending_openedMeetings.length > 0 ? <MyMeetingCard data={attending_openedMeetings[0]} participant /> :
               <div className="card-basic empty">
                  <button>모임 찾아보기</button>
               </div>
            }
         </MeetingWrapper>
      </>
   );
};

export default MyMeetings_mypage;
