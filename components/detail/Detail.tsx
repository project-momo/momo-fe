import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { qnaListLengthState } from '../../atoms/qna/selector';
// eslint-disable-next-line import/no-unresolved
import { SubTitle } from '../common/SubTitle';
import IconMore from './../../assets/images/icon_more.svg';
import IconToggle from './../../assets/images/icon_toggle.svg';
// eslint-disable-next-line import/no-unresolved
import QnaInput from './QnaInput';
import SubModal from './SubModal';
import QnaList from './QnAList';
interface DetailProps {
   userImage: string;
   username: string;
   location: string;
   gu: string[];
   content: string;
   title: string;
   hostId: number;
}

const Detail = ({ userImage, username, location, gu, content, title, hostId }: DetailProps) => {
   const qnaListLength = useRecoilValue(qnaListLengthState);

   const [toggleQna, setToggleQna] = useState(true);
   const [toggleModal, setToggleModal] = useState(false);

   return (
      <DetailLayout>
         <MoreIcon onClick={() => setToggleModal(!toggleModal)} src={IconMore}></MoreIcon>
         {toggleModal ? <SubModal hostId={hostId} /> : null}

         <UserCard backImg={userImage}>
            <div></div>
            <span>{username}</span>
         </UserCard>
         <SubTitle label={title} labelMore="" />
         <Content>{content}</Content>

         <ListTitle>만남 가능 장소</ListTitle>

         <LocationList>
            {gu.map((el, idx) => (
               <Location key={idx}>{el}</Location>
            ))}
         </LocationList>
         {location !== '' ? (
            <LocationList>
               <Location>{location}</Location>
            </LocationList>
         ) : null}

         {/* 유진 */}
         <ListTitle>
            Q&A
            <button onClick={() => setToggleQna(!toggleQna)}>
               {qnaListLength}개 <ToggleImg open={toggleQna} src={IconToggle} alt="toggle" />
            </button>
         </ListTitle>
         {toggleQna && <QnaList />}
         <QnaInput type="question" />
      </DetailLayout>
   );
};

export default Detail;

const DetailLayout = styled.div`
   width: 100%;
   background: #ffffff;
   padding: 28px 30px;
   border-radius: 15px;
   position: relative;
   z-index: 1;
`;

const UserCard = styled.div<{ backImg: string }>`
   span {
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      height: 24px;
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-word;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
   }

   display: flex;
   align-items: center;
   margin-bottom: 13px;
   div {
      background-image: url(${p => `${p.backImg}`});
      background-position: cover;
      border-radius: 30px;
      background-size: cover;
      height: 45px;
      width: 45px;
      margin-right: 14px;
   }
`;

const MoreIcon = styled.img`
   position: absolute;
   padding: 0 10px;
   cursor: pointer;
   top: 20px;
   right: 20px;
`;

const Content = styled.p`
   font-size: 15px;
   line-height: 1.5;
   font-weight: 400;
   margin-bottom: 35px;
`;

const ListTitle = styled.p`
   display: flex;
   align-items: center;
   margin: 20px 0 10px 0;
   font-size: 16px;
   color: #444bff;

   span {
      margin-left: 10px;
      margin-right: 5px;
      cursor: pointer;
   }

   button {
      display: flex;
      align-items: center;
      margin-left: 5px;
   }
`;
const ToggleImg = styled.img<{ open: boolean }>`
   width: 16px;
   height: 11px;
   margin-left: 6px;
   rotate: ${p => (p.open ? `0` : '180')}deg;
`;
const LocationList = styled.ul`
   margin-top: 2px;
   display: flex;
   flex-wrap: wrap;
`;
const Location = styled.li`
   list-style: inside;
   margin-right: 20px;
`;
