import {BasicWrapper} from './mypage.style';
import styled from 'styled-components';
import MyMeetingCard from './MyMeetingCard';

const MyMeetings = ({preview, myMeeting, attending}:any) => {
    // console.log(preview, myMeeting, attending)
    const dummyData = [
        {
            id: 1,
            meetingStatus: true,
            category:"개발",
            title: "개발 10년차가 전해 주는 멘토링",
            content: "멘토링 해드립니다. 주니어 개발자를 위한 다양한 멘토링 가능합니다 이력이 어떻구요 저렇구요 이렇습니다.멘토링 해드립니다. 주니어 개발자를 위한 다양한 멘토링 가능합니다 이력이 어떻구요 저렇구요 이렇습니다.멘토링 해드립니다. 주니어 개발자를 위한 다양한 멘토링 가능합니다 이력이 어떻구요 저렇구요 이렇습니다.",
            locations:["서초구", "강남구"],
            dateTimes:[],
            priceInfo: {
                pricePolicy: "HOUR",
                price: 10000
            },
            notice: "전달 사항"
        },
        {
            id: 2,
            meetingStatus: false,
            category:"라이프스타일",
            title: "읽기를 미루고 있던 두꺼운 벽돌책 부수는 북클럽",
            content: "안녕하세요! 온라인 북클럽 Bookies의 새로운 모임 #벽돌-휴먼에 참가하실 분들을 기다리고 있습니다!",
            locations:["강남역",'근처 스타벅스'],
            dateTimes:[],
            priceInfo: {
                pricePolicy: "HOUR",
                price: 5000
            },
            notice: "전달 사항"
        },
        {
            id: 3,
            meetingStatus: true,
            category:"테스트",
            title: "모집 종료 제외만 보여주기",
            content: "멘토링 해드립니다. 주니어 개발자를 위한 다양한 멘토링 가능합니다 이력이 어떻구요 저렇구요 이렇습니다.멘토링 해드립니다. 주니어 개발자를 위한 다양한 멘토링 가능합니다 이력이 어떻구요 저렇구요 이렇습니다.멘토링 해드립니다. 주니어 개발자를 위한 다양한 멘토링 가능합니다 이력이 어떻구요 저렇구요 이렇습니다.",
            locations:["서초구", "강남구"],
            dateTimes:[],
            priceInfo: {
                pricePolicy: "HOUR",
                price: 10000
            },
            notice: "전달 사항"
        },
    ]
    const openedMeetings:any = dummyData.filter((meeting:any) => meeting.meetingStatus === true); 
    const closedMeetings:any = dummyData.filter((meeting:any) => meeting.meetingStatus === false); 


    return (
        <>
        {/* 현재 모집중인 모임 */}
        <MeetingWrapper className={attending && 'hidden' }>
            <div className='title'>
                <p>현재 모집중인 모임<span>{openedMeetings.length}개</span></p>
                <button className='seeMore'>더보기</button>
            </div>
            {myMeeting && openedMeetings.map((meeting:any) => <MyMeetingCard data={meeting} key={meeting.id} />)}
            {preview && openedMeetings.length > 0 && <MyMeetingCard data={openedMeetings[0]} />}
            {openedMeetings.length === 0 && <div className='card empty'><button>모임 찾아보기</button></div>}
            
        </MeetingWrapper>

        {/* 참여 예정 모임 */}
        <MeetingWrapper className={myMeeting && 'hidden' }>
            <div className='title'>
                <p>참여 예정 모임<span>{openedMeetings.length}개</span></p>
                <button className='seeMore'>더보기</button>
            </div>
            {!preview && openedMeetings.map((meeting:any) => <MyMeetingCard data={meeting} key={meeting.id} />)}
            {preview && openedMeetings.length > 0 && <MyMeetingCard data={openedMeetings[0]} />}
            {openedMeetings.length === 0 && <div className='card empty'><button>모임 찾아보기</button></div>}
        </MeetingWrapper>

        {/* 모집 종료된 모임 */}
        <MeetingWrapper className={preview && 'hidden' }>
            <div className='title'>
                <p>모집 종료된 모임<span>{closedMeetings.length}개</span></p>
                <button className='seeMore'>더보기</button>
            </div>
            {!preview && closedMeetings.map((meeting:any) => <MyMeetingCard data={meeting} key={meeting.id} />)}
            {preview && closedMeetings.length > 0 && <MyMeetingCard data={closedMeetings[0]} />}
            {closedMeetings.length === 0 && <div className='card empty'><button>모집 종료된 모임이 없습니다.</button></div>}
        </MeetingWrapper>
        
        
        </>
    )
}

const MeetingWrapper = styled(BasicWrapper)`
    margin-top:30px;
    float:left;
    &.hidden{
        display:none;
    }
    .title{
        span{
            margin-left:15px;
        }
        .seeMore{
            font-size:15px;
            font-weight:600;
            &:hover{
                color: #444BFF;
            }
        }
    }
    .card{
        display:flex;
        align-items: center;
        justify-content: center;
        height: 138px;
        &.empty{
            button{
                font-size: 16px;
                font-weight:600;
                color: #444BFF;
            }
        }
        .left{
            flex:1;
            height:100%;
            padding-right: 50px;
            div{
                display: flex;
                align-items:flex-end;
                font-size:14px;
                .status{
                    font-size: 18px;
                    font-weight:900;
                    margin-right: 10px;
                    &.open{
                        color:#FF4D4D;
                    }
                    &.closed{
                        color:#8A8A8A;
                    }
                }
                .category{
                    margin-right: 10px;
                    font-weight: 600;
                }
            }
            .title{
                font-size: 18px;
                margin: 5px 0;
                padding: 0;
            }
            .title + p{
                font-size: 15px;
                word-break: keep-all;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient:vertical;
                word-wrap: break-wrod;
                text-overflow: ellipsis;
                overflow:hidden;
            }
        }

        .center{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
            margin-right: 25px;
            p{
                font-size: 15px;
                span{
                    font-size:16px;
                    font-weight: 600;
                }
            }
        }

        .right{
            width:220px;
            div{
                display: flex;
                justify-content: space-between;
                margin-top: 5px;
                button{
                    width:49%;
                }
            }
        }
    }
`

export default MyMeetings;