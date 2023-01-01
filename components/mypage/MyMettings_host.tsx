import { MeetingWrapper } from './mypage.style';
import MyMeetingCard from './MyMeetingCard';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { host_dummyData } from '../../dummy/mypage/dummy';
import { useEffect } from 'react';
import { mypageHostMeetings } from '../../atoms/mypage/atoms';
import { hostMeeting_closed, hostMeeting_opened } from '../../atoms/mypage/selector';

const MyMeetings_host = () => {
   const setHostMeetings = useSetRecoilState(mypageHostMeetings);
   const host_openedMeetings = useRecoilValue(hostMeeting_opened);
   const host_closedMeetings = useRecoilValue(hostMeeting_closed);

   useEffect(() => {
      // 통신
      // axios.get('/mypage/meetings/hosts?page=1&size=20')
      // .then((res) => {
      //    setHostMeetings(res);
      // })
      const fetchData = host_dummyData;
      setHostMeetings(fetchData);
   },[]);
   
   

   return (
      <>
         {/* 현재 모집중인 모임 */}
         <MeetingWrapper>
            <div className="title">
               <p>
                  현재 모집중인 모임<span>{host_openedMeetings.length}개</span>
               </p>
            </div>
            {host_openedMeetings.length > 0 ? host_openedMeetings.map((meeting: any) => <MyMeetingCard data={meeting} key={meeting.meetingId} />) :
               <div className="card-basic empty">
               <button>모임 찾아보기</button>
               </div>
            }
         </MeetingWrapper>

         {/* 모집 종료된 모임 */}
         <MeetingWrapper>
            <div className="title">
               <p>
                  모집 종료된 모임<span>{host_closedMeetings.length}개</span>
               </p>
            </div>
            {host_closedMeetings.length > 0 ? host_closedMeetings.map((meeting: any) => <MyMeetingCard data={meeting} key={meeting.meetingId} />):
               <div className="card-basic empty">
                  <button>모집 종료된 모임이 없습니다.</button>
               </div>
            }
         </MeetingWrapper>
      </>
   );
};

export default MyMeetings_host;
