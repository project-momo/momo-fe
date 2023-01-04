import Application from './Application';
import { Button } from './Button';

const MyMeetingCard = ({ data }: any) => {
   const price = data.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');

   const newApplications = data.applications.requests;
   const confirmedApplications = data.applications.confirmed;

   // console.log('new만 : ', newApplications, confirmedApplications.length);
   return (
      <div id="detail">
         <div className="accordion-item card-basic">
            <h2 className="accordion-header " id={`heading${data.meetingId}`}>
               <div className="left">
                  <div>
                     <p className={data.isOpen ? 'status open' : 'status closed'}>
                        {data.meetingState}
                        {/* {data.meetingStatus ? '모집중' : '모집 종료'} */}
                     </p>
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
                     {data.price !== 0 && <span>{price}원</span>}
                  </p>
                  {/* <p>{data.locations.address.join(',')}</p> */}
               </div>
               <div className="right">
                  
                  {data.host ? 
                  <div
                     data-bs-toggle="collapse"
                     data-bs-target={`#collapse${data.meetingId}`}
                     aria-expanded="true"
                     aria-controls={`collapse${data.meetingId}`}>
                     <Button text="참가 신청 현황" icon />
                  </div>
                  :
                  <div data-bs-toggle="modal" data-bs-target="#myModal">
                     <Button text="참가 신청 현황" modal />
                  </div>
                  }
                  
                  {data.isOpen && (
                     <div>
                        <Button text="모임 변경" />
                        <Button text="모임 취소" />
                     </div>
                  )}
               </div>
            </h2>

            {/* 신정 현황 확인 */}
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
         </div>
      </div>
   );
};

export default MyMeetingCard;
