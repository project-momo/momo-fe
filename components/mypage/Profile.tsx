import { BasicWrapper } from './mypage.style';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPen } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { myProfile } from '../../atoms/mypage/atoms';
import { useEffect } from 'react';
import axios from 'axios';
interface ImgProps {
   imgprops: string;
}

const Profile = () => {
   const API_URI = process.env.NEXT_PUBLIC_API_URI;
   const [myInfo, setMyInfo] = useRecoilState(myProfile);

   useEffect(() => {
      axios.defaults.headers.common['Authorization'] = localStorage.getItem('AccessToken');
      axios.get(API_URI + '/mypage/profile').then((res): any => setMyInfo(res.data));
   }, []);

   return (
      <ProfileWrapper className="half">
         <p className="title">내 정보</p>
         <div className="card-basic">
            <div className="profile-imgBox">
               <Avatar imgprops={myInfo.avatar} />
            </div>
            <div className="profile-txt">
               <p className="nickname">{myInfo.nickname}</p>
               <p className="email">{myInfo.email}</p>
            </div>
            {/* <button className="edit">
               <FontAwesomeIcon icon={faPen} />
               수정
            </button> */}
         </div>
      </ProfileWrapper>
   );
};

const ProfileWrapper = styled(BasicWrapper)`
   .card-basic {
      display: flex;
      align-items: center;
      height: 105px;
   }
   .profile-imgBox {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background-color: lightgray;
      margin-right: 20px;
      overflow: hidden;
   }
   .profile-txt {
      font-size: 16px;
      font-weight: 600;
      flex: 1;
   }
   .edit {
      align-self: flex-start;
      font-weight: 600;
      svg {
         width: 14px;
         margin-right: 5px;
      }
      &:hover {
         color: #444bff;
         path {
            color: #444bff;
         }
      }
   }
`;

const Avatar = styled.div<ImgProps>`
   width: 100%;
   height: 100%;
   background-image: url(${props => `${props.imgprops}`});
   background-size: cover;
`;

export default Profile;
