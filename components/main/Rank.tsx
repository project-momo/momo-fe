import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

interface RankProps {
   rankNum: string;
   imgLink: string;
   title: string;
   meetingId: number;
}
interface ImgProps {
   imgprops: string;
}
const Rank = ({ rankNum, imgLink, title, meetingId }: RankProps) => {
   console.log(imgLink);
   return (
      <RankLi>
         <Link href={`/sub/${meetingId}`}>
            <span className="rank">{rankNum}</span>
            <RankImg className="userImg" imgprops={imgLink} />
            <span className="title">{title}</span>
         </Link>
      </RankLi>
   );
};

export default Rank;

const RankLi = styled.li`
   a {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
   }
   span.title {
      width: 185px;
      display: inline-block;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      height: 20px;
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-word;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
   }
   span.rank {
      width: 24px;
      text-align: left;
   }
`;
const RankImg = styled.div<ImgProps>`
   width: 25px;
   height: 25px;
   border-radius: 100%;
   overflow: hidden;
   background-image: url(${props => `${props.imgprops}`});
   background-position: 100% 100%;
   background-size: cover;
   margin: 0 5px;
`;
