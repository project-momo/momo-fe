import styled from 'styled-components';
import { SquareButton } from '../../../mypage/Button';

const Withdraw = () => {
   return (
      <ModalWrapper>
         <p className="title">적립금 출금</p>
         <div className="point-status">
            <p className="title-sm">보유 적립금</p>
            <input type="text" defaultValue="36,000원" readOnly />
         </div>
         <div className="withdraw">
            <p className="title-sm">출금할 적립금</p>
            <ul>
               <li className="input-box">
                  <input type="text" value="" onChange={() => {''}} placeholder="출금할 금액을 입력해주세요." />
               </li>
               <li className="message">보유 적립금을 초과해 출금할 수 없습니다.</li>
               <li className="quick-btns">
                  <button>5,000</button>
                  <button>10,000</button>
                  <button>50,000</button>
                  <button>100,000</button>
               </li>
            </ul>
         </div>
         <div className="bank">
            <p className="title-sm">계좌 번호</p>
            <div>
               <select>
                  <option>은행</option>
                  <option>부산은행</option>
                  <option>신한은행</option>
               </select>
               <input type="text" value="" onChange={() => {''}} placeholder="입금 계좌번호를 입력하세요" />
            </div>
         </div>
         <p className="notice">*입금은 영업일 기준 3-4일 내 이루어집니다.</p>
         <SquareButton>출금하기</SquareButton>
      </ModalWrapper>
   );
};

const ModalWrapper = styled.div`
   text-align: left;
   div {
      border-bottom: 1px solid #cccccc;
      margin-bottom: 10px;
      padding: 3px 0;
      display: flex;
      align-items: center;
      &:last-child {
         border-bottom: none;
      }
      .title-sm {
         width: 25%;
         font-size: 16px;
         font-weight: 900;
      }
      &.withdraw .title-sm {
         align-self: flex-start;
         margin-top: 10px;
      }
      input {
         height: 45px;
         background-color: #f0f0f0;
         padding: 5px 10px;
         border-radius: 5px;
         border: none;
         font-size: 15px;
         &:focus {
            outline: none;
         }
      }
      .message {
         font-size: 12px;
         color: #ff5050;
         margin: 5px 2px;
      }
      .quick-btns {
         display: flex;
         margin: 10px 0;
         button {
            height: 30px;
            padding: 5px 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #636363;
            color: white;
            font-size: 15px;
            font-weight: 600;
            border-radius: 5px;
            margin-right: 5px;
         }
      }
      ul {
         flex: 1;
         li {
            font-size: 15px;
         }
         input {
            width: 100%;
         }
      }
      &.bank {
         border-bottom: none;
         margin-bottom: 0;
         div {
            margin-bottom: 0;
            flex: 1;
         }
      }
      select {
         height: 45px;
         border-radius: 5px;
         margin-right: 10px;
         border: none;
         background-color: #f0f0f0;
         &:focus {
            outline: none;
         }
      }
   }
   .notice {
      font-size: 14px;
      font-weight: 600;
      color: #6f6f6f;
      margin-top: 10px;
   }
   .notice + button {
      margin-top: 30px;
   }
`;

export default Withdraw;
