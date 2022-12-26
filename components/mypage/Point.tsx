import {BasicWrapper} from './mypage.style';
import styled from 'styled-components';

const Profile = ({myPoint}:any) => {
    return (
        <PointWrapper className='half'>
            <p className='title'>보유 적립금</p>
            <div className={myPoint ? 'card autoHeight' : 'card'}>
                <div className='myPoint'>36,000원</div>
                <div className='btn-wrapper'>
                    {!myPoint && <button>내역</button>}
                    <button>출금</button>
                </div>
            </div>
        </PointWrapper>
    )
}

const PointWrapper = styled(BasicWrapper)`
    .card{
        display:flex;
        align-items: center;
        height: 105px;
        div{
            width:50%;
        }
        &.autoHeight{
            height: auto;
        }
    }
    .myPoint{
        height: 100%;
        font-size:24px;
        font-weight: 900;
        color:#444BFF;
        border-right: 1px solid #B4B4B4;
        display: flex;
        justify-content:center;
        align-items:center;
    }
    .btn-wrapper{
        height:100%;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content: center;
        button{
            width:90%;
            height:50%;
            font-size: 15px;
            font-weight: 900;
            display:flex;
            justify-content: center;
            align-items:center;
            &:hover{
                color:#444BFF;
                background-color: #ECF4FF;
                border-radius: 15px;
            }
        }
    }
`

export default Profile;