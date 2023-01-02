import { useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { myProfile } from '../../../../atoms/mypage/atoms';
import { SquareButton } from '../../../mypage/Button';
import QuickBtn from './QuickBtn';

const Withdraw = () => {
   const myPoint = useRecoilValue(myProfile).point;
   // const [myPoint, setMyPoint] = useState(50000);
   const [message, setMessage] = useState('');
   const [point, setPoint] = useState('0');
   const [bank, setBank] = useState('');
   const [bankAccount, setBankAccount] = useState('');
   const inputEl = useRef<HTMLInputElement>(null);

   const quickBtn = ['5000','10000','50000','100000'];
   const banks = ['은행명','산업은행','기업은행','우리은행','하나은행','농협','우체국','신한은행','외환은행',,'수협','신협','부산은행','새마을금고','경남은행'];

   // 출금가능 적립금 계산
   const calculate = (e:any) => {
      const inputPoint : any = Number(e.target.value.replace('원', '').split(',').join(''));

      if(e.key === 'Backspace'){
         let temp = e.target.value.replace('원', '').split(',').join('');
         let result = temp.substr(0, temp.length - 1);
         if(result.length === 0){
            result = 0;
         }
         if(inputPoint <= myPoint){
            setMessage('');
         }
         setPoint(result);
         return

      }else if(inputPoint > myPoint){
         setMessage('보유 적립금을 초과해 출금할 수 없습니다.')
      }else{
         setPoint(inputPoint);
      }
   }

   // 적립금 선택 옵션 버튼
   const quickBtnHandler = (e:any) => {
      if(e.target.value <= myPoint){
         setPoint(e.target.value);
         setMessage('');
      }else{
         setMessage('보유 적립금을 초과해 출금할 수 없습니다.')
      }
      inputEl.current?.focus();
   }

   // 은행 선택
   const selectBank = (e:any) => {
      setBank(e.target.value);
   }

   // 계좌번호 입력
   const checkBankAccount = (e:any) => {
      if(!Number(e.target.value)){
         return
      }else{
         setBankAccount(e.target.value);
      }
   }

   // 출금하기
   const withdraw = (e:any) => {
      const inputPoint = Number(point.replace('원', '').split(',').join(''));
      if(inputPoint === 0){
         return alert('출금할 적립금을 입력해주세요.');
      }else if(bank === '은행명'){
         return alert('입금받을 은행을 선택해주세요.');
      }else if(bankAccount === ''){
         return alert('입금 계좌번호를 입력해주세요.');
      }else{
         alert('완료!');
      }

      // 통신
   }

   return (
      <ModalWrapper>
         <p className="title">적립금 출금</p>
         <div className="point-status">
            <p className="title-sm">보유 적립금</p>
            <input type="text" value={myPoint.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',') + '원'} readOnly />
         </div>
         <div className="withdraw">
            <p className="title-sm">출금할 적립금</p>
            <ul>
               <li className="input-box">
                  <input type="text" ref={inputEl} onKeyUp={calculate} value={point.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',') + '원'} onChange={calculate} placeholder="출금할 금액을 입력해주세요." />
               </li>
               <li className="message" >{message}</li>
               <li className="quick-btns">
                  {quickBtn.map((btn, idx) => <QuickBtn key={idx} value={btn} func={quickBtnHandler} />)}
               </li>
            </ul>
         </div>
         <div className="bank">
            <p className="title-sm">계좌 번호</p>
            <div>
               <select onChange={selectBank}>
                  {banks.map((bank, idx) => <option key={idx} value={bank}>{bank}</option>)}
               </select>
               <input type="text" value={bankAccount} maxLength={16} onChange={checkBankAccount} placeholder="입금 계좌번호를 입력하세요" />
            </div>
         </div>
         <p className="notice">*입금은 영업일 기준 3-4일 내 이루어집니다.</p>
         <SquareButton onClick={withdraw}>출금하기</SquareButton>
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
