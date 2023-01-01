import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Modal from './Modal';
import { modalState } from '../../atoms/mypage/atoms';
import { useSetRecoilState } from 'recoil';

const Application = ({ data, confirmed }: any) => {
   const setType = useSetRecoilState(modalState);
   const [isActive, setActive] = useState(false);

   return (
      <div className="accordion-item application-list">
         <h3 className="accordion-header " id={`heading-detail${data.userId}`}>
            <div className="application">
               <div className="profile">
                  <div className="imgBox">
                     <img src={data.imageUrl} alt="" />
                  </div>
                  <p>{data.nickname}</p>
               </div>
               <div className="timeInfo">
                  <p>{data.dateInfo && data.dateInfo.date}</p>
                  <p>{data.dateTimeInfo && data.dateTimeInfo.time}</p>
               </div>
               <div className="seeMessage">
                  <button
                     onClick={() => setActive(!isActive)}
                     data-bs-toggle="collapse"
                     data-bs-target={`#collapse-detail${data.userId}`}
                     aria-expanded="true"
                     aria-controls={`collapse-detail${data.userId}`}>
                     {data.message && '전달 사항'}
                     <FontAwesomeIcon className={isActive ? 'icon active' : 'icon'} icon={faChevronDown} />
                  </button>
               </div>
               {!confirmed ? (
                  <div className="btn-wrapper">
                     <button>수락</button>
                     <button onClick={() => setType('cancel')} data-bs-toggle="modal" data-bs-target="#myModal">
                        취소
                     </button>
                  </div>
               ) : (
                  <div className="contact-wrapper">
                     {/* <p>{data.contact}</p> */}
                     <p>{data.email}</p>
                  </div>
               )}
            </div>
         </h3>
         <div
            id={`collapse-detail${data.userId}`}
            className="accordion-collapse collapse "
            aria-labelledby={`heading-detail${data.userId}`}
            data-bs-parent="#accordionExample">
            <div className="accordion-body message">{data.message}</div>
         </div>

         <Modal />
      </div>
   );
};

export default Application;
