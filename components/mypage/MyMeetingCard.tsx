import Application from './Application';
import { Button } from './Button';
import Modal from './Modal';

const MyMeetingCard = ({ data, participant }: any) => {
   const price = data.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
   let newApplications, confirmedApplications, meetingInfo;

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

   return (
      <div id="detail">
         <div className="accordion-item card-basic">
            <h2 className="accordion-header " id={`heading${data.meetingId}`}>
               <div className="left">
                  <div>
                     <p className={data.isOpen ? 'status open' : 'status closed'}>{data.meetingState}</p>
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
                  {!participant ? (
                     <div
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${data.meetingId}`}
                        aria-expanded="true"
                        aria-controls={`collapse${data.meetingId}`}>
                        <Button text="참가 신청 현황" icon />
                     </div>
                  ) : (
                     <div data-bs-toggle="modal" data-bs-target="#myModal">
                        <Button text="참가 신청 현황" meetingInfo={meetingInfo} modal />
                     </div>
                  )}

                  {data.isOpen && (
                     <div>
                        <Button text="모임 변경" />
                        <Button text="모임 취소" />
                     </div>
                  )}
               </div>
            </h2>

            {/* 신정 현황 확인 */}
            {!participant && (
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
                           {newApplications.map((application: any) => (
                              <Application data={application} key={application.userId} />
                           ))}
                        </div>
                     )}
                     {/* 확정 모임자 */}
                     {confirmedApplications.length > 0 && (
                        <div className="application">
                           <p className="title">확정 모임자</p>
                           {confirmedApplications.map((application: any) => (
                              <Application data={application} key={application.userId} confirmed />
                           ))}
                        </div>
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
