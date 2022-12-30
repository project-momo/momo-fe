import { MeetingWrapper } from './mypage.style';
import MyMeetingCard from './MyMeetingCard';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { host_dummyData } from '../../dummy/mypage/dummy';
import { useEffect } from 'react';
import { mypageAttendingMeetings, mypageHostMeetings} from '../../atoms/mypage/atoms';
import Link from 'next/link';
import { attendingMeeting_opened, hostMeeting_opened } from '../../atoms/mypage/selector';
import axios from 'axios';

const MyMeetings_mypage = () => {
   const setHostMeetings = useSetRecoilState(mypageHostMeetings);
   const setAttendingMeetings = useSetRecoilState(mypageAttendingMeetings);
   const host_openedMeetings = useRecoilValue(hostMeeting_opened);
   const attending_openedMeetings = useRecoilValue(attendingMeeting_opened);
   // const openedMeetings: any = hostMeetings.filter((meeting:any) => meeting.meetingStatus === true);
   // const closedMeetings: any = hostMeetings.filter((meeting:any) => meeting.meetingStatus === false);

   useEffect(() => {
      // 통신 2개
      // axios
      // .all([axios.get("/mypage/meetings/hosts?page=1&size=20"), axios.get('')])
      // .then(
      //    axios.spread((res1, res2) => {
      //       setHostMeetings(res1);
      //       setAttendingMeetings(res2);
      //    })
      // )
      // .catch((err) => console.log(err));

      // 통신 만든 모임만 테스트
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
            {attending_openedMeetings.length > 0 ? <MyMeetingCard data={attending_openedMeetings[0]} /> :
               <div className="card-basic empty">
                  <button>모임 찾아보기</button>
               </div>
            }
         </MeetingWrapper>
      </>
   );
};

export default MyMeetings_mypage;
