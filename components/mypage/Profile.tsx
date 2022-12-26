import {BasicWrapper} from './mypage.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';

const Profile = () => {
    return (
        <ProfileWrapper className='half'>
            <p className='title'>내 정보</p>
            <div className='card'>
                <div className='profile-imgBox'>
                    <img src='' alt=''/>
                </div>
                <div className='profile-txt'>
                    <p className='nickname'>Icyeong</p>
                    <p className='email'>abcd@gmail.com</p>
                    <p className='contact'>010-1234-5678</p>
                </div>
                <button className='edit'>
                <FontAwesomeIcon icon={faPen} />
                    수정
                </button>
            </div>
        </ProfileWrapper>
    )
}

const ProfileWrapper = styled(BasicWrapper)`
    .card{
        display:flex;
        align-items: center;
        height: 105px;
    }
    .profile-imgBox{
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background-color: lightgray;
        margin-right: 20px
    }
    .profile-txt{
        font-size: 16px;
        font-weight: 500;
        flex:1;
    }
    .edit{
        align-self: flex-start;
        font-weight: 600;
        &:hover{
            color:#444BFF;
        }
    }
`


export default Profile;