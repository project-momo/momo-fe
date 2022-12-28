import Application from './Application';
import { Button } from './Button';

const MyMeetingCard = ({ data }: any) => {
   // console.log(data.applications.new);
   const price = data.priceInfo.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');

   const newApplications = data.applications.new;
   const confirmedApplications = data.applications.confirmed;

   console.log('new만 : ', newApplications, confirmedApplications.length);
   return (
      <div id="detail">
         <div className="accordion-item card-basic">
            <h2 className="accordion-header " id={`heading${data.id}`}>
               <div className="left">
                  <div>
                     <p className={data.meetingStatus ? 'status open' : 'status closed'}>
                        {data.meetingStatus ? '모집중' : '모집 종료'}
                     </p>
                     <p className="category">{data.category}</p>
                     <p className="date">2022.12.26</p>
                  </div>
                  <button className="title">{data.title}</button>
                  <p>{data.content}</p>
               </div>
               <div className="center">
                  <p className="rate">
                     {data.priceInfo.pricePolicy === 'HOUR' ? '시간당' : data.priceInfo.pricePolicy}{' '}
                     <span>{price}원</span>
                  </p>
                  <p>{data.locations.join(', ')}</p>
               </div>
               <div className="right">
                  <div
                     data-bs-toggle="collapse"
                     data-bs-target={`#collapse${data.id}`}
                     aria-expanded="true"
                     aria-controls={`collapse${data.id}`}>
                     <Button text="참가 신청 현황" icon />
                  </div>
                  {data.meetingStatus && (
                     <div>
                        <Button text="모임 변경" />
                        <Button text="모임 취소" />
                     </div>
                  )}
               </div>
            </h2>

            {/* 신정 현황 확인 */}
            <div
               id={`collapse${data.id}`}
               className="accordion-collapse collapse  application-status"
               aria-labelledby={`heading${data.id}`}
               data-bs-parent="#accordionExample">
               <div className="accordion-body">
                  {/* 새로운 신청 */}
                  {newApplications.length > 0 && (
                     <div className="application">
                        <p className="title">새로운 신청</p>
                        {newApplications.map((application: any) => (
                           <Application data={application} key={application.id} />
                        ))}
                     </div>
                  )}
                  {/* 확정 모임자 */}
                  {confirmedApplications.length > 0 && (
                     <div className="application">
                        <p className="title">확정 모임자</p>
                        {confirmedApplications.map((application: any) => (
                           <Application data={application} key={application.id} confirmed />
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
