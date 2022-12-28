import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Modal from './Modal';

const Application = ({ data, confirmed }: any) => {
   console.log('card : ', data, confirmed);

   const [isActive, setActive] = useState(false);

   return (
      <div className="accordion-item application-list">
         <h3 className="accordion-header " id={`heading-detail${data.id}`}>
            <div className="application">
               <div className="profile">
                  <div className="imgBox">
                     <img src={data.img} alt="" />
                  </div>
                  <p>{data.nickname}</p>
               </div>
               <div className="timeInfo">
                  <p>{data.dateInfo && data.dateInfo.date}</p>
                  <p>{data.dateInfo && data.dateInfo.time}</p>
               </div>
               <div className="seeMessage">
                  <button
                     onClick={() => setActive(!isActive)}
                     data-bs-toggle="collapse"
                     data-bs-target={`#collapse-detail${data.id}`}
                     aria-expanded="true"
                     aria-controls={`collapse-detail${data.id}`}>
                     {data.message && '전달 사항'}
                     <FontAwesomeIcon className={isActive ? 'icon active' : 'icon'} icon={faChevronDown} />
                  </button>
               </div>
               {!confirmed ? (
                  <div className="btn-wrapper">
                     <button>수락</button>
                     <button data-bs-toggle="modal" data-bs-target="#myModal">
                        취소
                     </button>
                  </div>
               ) : (
                  <div className="contact-wrapper">
                     <p>{data.contact}</p>
                     <p>{data.email}</p>
                  </div>
               )}
            </div>
         </h3>
         <div
            id={`collapse-detail${data.id}`}
            className="accordion-collapse collapse "
            aria-labelledby={`heading-detail${data.id}`}
            data-bs-parent="#accordionExample">
            <div className="accordion-body message">제가 코딩한게 있는데 보여드면서 코드리뷰 받고 싶습니다.</div>
         </div>

         <Modal cancel />
      </div>
   );
};

export default Application;
