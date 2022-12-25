import styled from "styled-components";
import List from "./List";
import { BasicWrapper } from "./mypage.style";

const PointList = () => {

    const dummyData = [
        {
            id:1,
            message: "‘개발자 멘토링 해드립니다’ 모임에 새로운 참가자가 있습니다.",
            date: "2022.12.22",
            status: '적립',
            priceInfo: {
                status: 'plus',
                price: 9000
            }
        },
        {
            id:2,
            message: "‘개발자 멘토링 해드립니다’ 모임에 참여하였습니다.",
            date: "2022.12. 20",
            status: '차감',
            priceInfo: {
                status: 'minus',
                price: 9000
            }
        },
        {
            id:3,
            message: "‘개발자 멘토링 해드립니다’ 모임 참가가 취소되었습니다.",
            date: "2022.12. 18",
            status: '적립',
            priceInfo: {
                status: 'plus',
                price: 9000
            }
        }
    ]

    return (
        <PointListWrapper>
            <div className="title">적립금 내역</div>
            <div className="card">
                {dummyData.map(list => <List data={list} key={list.id}/>)}
            </div>
            {dummyData.length === 0 && <div className='card empty'>적립금 이용 내역이 없습니다.</div>}
        </PointListWrapper>
    )
}

const PointListWrapper = styled(BasicWrapper)`
    .card{
        padding: 0;
        overflow:hidden;
        &.empty{
            display:flex;
            align-items: center;
            justify-content: center;
            height: 100px;
            font-size:15px;
            color: #565656;
            font-weight: 600;
        }
    }
    .list{
        display:flex;
        padding: 30px 25px;
        border-bottom: 1px solid #C3C3C3;
        .message{
            font-size: 15px;
            font-weight:600;
            flex:1;
            span{
                font-size: 14px;
                color: #5F5F5F;
                margin-left:15px;
            }
        }
        .status{
            font-size:16px;
            font-weight: 600;
            &.plus{
                color: #6D72F9;
            }
            &.minus{
                color:#FF7B7B;
            }
        }
        .point{
            font-size:16px;
            font-weight: 600;
            width: 10%;
            text-align: right;
        }
    }

`

export default PointList;