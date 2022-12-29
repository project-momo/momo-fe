import { BasicWrapper } from './mypage.style';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Modal from './Modal';
// import { ModalLayout } from '../common/Modal/Modal.stories';

const Point = ({ myPoint }: any) => {
   const router = useRouter();

   return (
      <PointWrapper className="half">
         <p className="title">보유 적립금</p>
         <div className={myPoint ? 'card-basic autoHeight' : 'card-basic'}>
            <div className="myPoint">36,000원</div>
            <div className="btn-wrapper">
               {!myPoint && <button onClick={() => router.push('/point')}>내역</button>}
               <button type="button" data-bs-toggle="modal" data-bs-target="#myModal">
                  출금
               </button>
            </div>
         </div>

         <Modal withdraw />
      </PointWrapper>
   );
};

const PointWrapper = styled(BasicWrapper)`
   .card-basic {
      display: flex;
      align-items: center;
      height: 105px;
      div {
         width: 50%;
      }
      &.autoHeight {
         height: auto;
      }
   }
   .myPoint {
      height: 100%;
      font-size: 24px;
      font-weight: 900;
      color: #444bff;
      border-right: 1px solid #b4b4b4;
      display: flex;
      justify-content: center;
      align-items: center;
   }
   .btn-wrapper {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      button {
         width: 90%;
         height: 50%;
         font-size: 15px;
         font-weight: 900;
         display: flex;
         justify-content: center;
         align-items: center;
         &:hover {
            color: #444bff;
            background-color: #ecf4ff;
            border-radius: 15px;
         }
      }
   }
`;

export default Point;
