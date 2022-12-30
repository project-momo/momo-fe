import { MeetingWrapper } from './mypage.style';
import MyMeetingCard from './MyMeetingCard';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { host_dummyData } from '../../dummy/mypage/dummy';
import { useEffect } from 'react';
import { mypageAttendingMeetings } from '../../atoms/mypage/atoms';
import { attendingMeeting_closed, attendingMeeting_opened } from '../../atoms/mypage/selector';

const MyMeetings_attending = () => {
   const setAttendingMeetings = useSetRecoilState(mypageAttendingMeetings);
   const attending_openedMeetings = useRecoilValue(attendingMeeting_opened);
   const attending_closedMeetings = useRecoilValue(attendingMeeting_closed);

   useEffect(() => {
      // 통신
      // axios.get('')
      // .then((res) => {
      //    setAttendingMeetings(res);
      // })
      const fetchData = host_dummyData;
      setAttendingMeetings(fetchData);
   },[]);
   
   

   return (
      <>
         {/* 참여 예정 모임 */}
         <MeetingWrapper>
            <div className="title">
               <p>
                  참여 예정 모임<span>{attending_openedMeetings.length}개</span>
               </p>
            </div>
            {attending_openedMeetings.length > 0 ? attending_openedMeetings.map((meeting: any) => <MyMeetingCard data={meeting} key={meeting.meetingId} />):
               <div className="card-basic empty">
               <button>모임 찾아보기</button>
               </div>
            }
         </MeetingWrapper>

         {/* 모집 종료된 모임 */}
         <MeetingWrapper>
            <div className="title">
               <p>
                  모집 종료된 모임<span>{attending_closedMeetings.length}개</span>
               </p>
            </div>
            {attending_closedMeetings.length > 0 ? attending_closedMeetings.map((meeting: any) => <MyMeetingCard data={meeting} key={meeting.meetingId} />):
               <div className="card-basic empty">
               <button>모집 종료된 모임이 없습니다.</button>
               </div>
            }
         </MeetingWrapper>
      </>
   );
};


export default MyMeetings_attending;
