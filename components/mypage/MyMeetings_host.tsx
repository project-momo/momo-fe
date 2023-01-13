import { MeetingWrapper } from './mypage.style';
import MyMeetingCard from './MyMeetingCard';
import { useRecoilValue } from 'recoil';
import { hostMeeting_closed, hostMeeting_opened } from '../../atoms/mypage/selector';
import Link from 'next/link';

const MyMeetings_host = () => {
   const host_openedMeetings = useRecoilValue(hostMeeting_opened);
   const host_closedMeetings = useRecoilValue(hostMeeting_closed);

   return (
      <>
         {/* 현재 모집중인 모임 */}
         <MeetingWrapper>
            <div className="title">
               <p>
                  현재 모집중인 모임<span>{host_openedMeetings.length}개</span>
               </p>
            </div>
            {host_openedMeetings.length > 0 ? (
               host_openedMeetings.map((meeting: any) => <MyMeetingCard data={meeting} key={meeting.meetingId} />)
            ) : (
               <div className="card-basic empty">
                  <Link href={'/meeting/create'}>모임 등록하기</Link>
               </div>
            )}
         </MeetingWrapper>

         {/* 모집 종료된 모임 */}
         <MeetingWrapper>
            <div className="title">
               <p>
                  모집 종료된 모임<span>{host_closedMeetings.length}개</span>
               </p>
            </div>
            {host_closedMeetings.length > 0 ? (
               host_closedMeetings.map((meeting: any) => <MyMeetingCard data={meeting} key={meeting.meetingId} />)
            ) : (
               <div className="card-basic empty">
                  <button>모집 종료된 모임이 없습니다.</button>
               </div>
            )}
         </MeetingWrapper>
      </>
   );
};

export default MyMeetings_host;
