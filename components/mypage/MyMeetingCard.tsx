import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { applications, modalState, selectedMeeting, selectedReservation } from '../../atoms/mypage/atoms';
import { setSubDataObject } from '../../atoms/sub/atom';
import Application from './Application';
import { Basic, Button } from './Button';
import Modal from './Modal';
import { EmptyBox } from './mypage.style';

const MyMeetingCard = ({ data, participant }: any) => {
   const API_URI = process.env.NEXT_PUBLIC_API_URI;
   const setType = useSetRecoilState(modalState);
   const setSelectedMeeting = useSetRecoilState(selectedMeeting);
   const setReservationId = useSetRecoilState(selectedReservation);
   const setPostData = useSetRecoilState(setSubDataObject);
   const price = data.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
   const [hasAccordion, setAccordionState] = useState(false);
   const setApplications = useSetRecoilState(applications);
   let newApplications = [];
   let confirmedApplications = [];
   let meetingInfo;
   const router = useRouter();

   // 참여 모임
   if (participant) {
      meetingInfo = {
         title: data.title,
         hostInfo: data.host,
         address: data.address,
         date: data.application.dateTimeInfo
      };
      // 만든 모임
   } else {
      newApplications = data.applications.requests;
      confirmedApplications = data.applications.confirmed;
   }

   const closeMeeting = () => {
      setType('closeMeeting');
      setSelectedMeeting({ id: data.meetingId });
   };

   const cancelMeeting = () => {
      setType('cancelMeeting');
      setSelectedMeeting({ id: data.meetingId });
      setReservationId({ id: data.application.reservationId });
   };

   const linkTo = async () => {
      await axios
         .get(`${API_URI}/meetings/${data.meetingId}`)
         .then(res => {
            setPostData(res.data);
         })
         .catch(e => console.log(e));
      router.push(`/meeting/update/${data.meetingId}`);
   };

   useEffect(() => {
      if (newApplications.length === 0 && confirmedApplications.length === 0) {
         setAccordionState(true);
      } else if (newApplications.length > 0 || confirmedApplications.length > 0) {
         setAccordionState(true);
         setApplications(data.applications);
      }
   }, []);

   return (
      <div id="detail">
         <div className="accordion-item card-basic">
            <h2 className="accordion-header " id={`heading${data.meetingId}`}>
               <div className="left">
                  <div>
                     {participant ? (
                        <p className={data.isOpen ? 'status open' : 'status closed'}>{data.meetingState}</p>
                     ) : (
                        <p className={data.isOpen ? 'status open' : 'status closed'}>{data.meetingState}</p>
                     )}
                     <p className="category">{data.category}</p>
                     <p className="date">{data.dateTime.startDate}</p>
                  </div>
                  <button className="title">{data.title}</button>
                  <p>{data.content}</p>
               </div>
               <div className="center">
                  <p className="rate">
                     {data.dateTime.datePolicy === 'HOUR' && '시간당'}
                     {data.dateTime.datePolicy === 'DAY' && '종일'}
                     {data.dateTime.datePolicy === 'FREE' && '자유'}
                     <span>{data.price === 0 ? '무료' : price + '원'}</span>
                  </p>
                  <p>{data.address.addresses.join(', ')}</p>
               </div>
               <div className="right">
                  {/* 주최자인 경우*/}
                  {!participant ? (
                     <div
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${data.meetingId}`}
                        aria-expanded="true"
                        aria-controls={`collapse${data.meetingId}`}>
                        <Button
                           func={() => setSelectedMeeting({ id: data.meetingId })}
                           text="참가 신청 현황"
                           icon={hasAccordion}
                           // noApplications={}
                        />
                     </div>
                  ) : (
                     <div data-bs-toggle="modal" data-bs-target="#myModal">
                        <Button
                           func={() => setSelectedMeeting({ id: data.meetingId })}
                           text="참가 신청 현황"
                           meetingInfo={meetingInfo}
                           modal
                        />
                     </div>
                  )}

                  {data.isOpen && (
                     <div>
                        {/* 주최자인 경우*/}
                        {!participant && (
                           <Basic className="halfWidth" onClick={linkTo}>
                              모임 변경
                           </Basic>
                        )}
                        {!participant ? (
                           <Basic onClick={closeMeeting} data-bs-toggle="modal" data-bs-target="#myModal">
                              모임 마감
                           </Basic>
                        ) : (
                           <Basic onClick={cancelMeeting} data-bs-toggle="modal" data-bs-target="#myModal">
                              모임 취소
                           </Basic>
                        )}
                     </div>
                  )}
               </div>
            </h2>

            {/* 신정 현황 확인 */}
            {!participant && hasAccordion && (
               <div
                  id={`collapse${data.meetingId}`}
                  className="accordion-collapse collapse  application-status"
                  aria-labelledby={`heading${data.meetingId}`}
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                     {/* 새로운 신청 */}
                     {newApplications.length > 0 && (
                        <div className="application">
                           <p className="title">새로운 신청</p>
                           {newApplications.map((application: any, index: number) => (
                              <Application data={application} key={index} />
                           ))}
                        </div>
                     )}
                     {/* 확정 모임자 */}
                     {confirmedApplications.length > 0 && (
                        <div className="application">
                           <p className="title">확정 모임자</p>
                           {confirmedApplications.map((application: any, index: number) => (
                              <Application data={application} key={index} confirmed />
                           ))}
                        </div>
                     )}
                     {newApplications.length === 0 && confirmedApplications.length === 0 && (
                        <EmptyBox>참가 신청 내역이 없습니다.</EmptyBox>
                     )}
                  </div>
               </div>
            )}
         </div>

         <Modal />
      </div>
   );
};

export default MyMeetingCard;
