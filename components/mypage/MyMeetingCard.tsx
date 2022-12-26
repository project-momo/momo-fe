import { Button } from "./Button";

const MyMeetingCard = ({data}:any) => {
    // console.log(data.locations);
    const price = data.priceInfo.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    return (
        <div className='card'>
            <div className='left'>
                <div>
                    <p className={data.meetingStatus? "status open" : "status closed"}>{data.meetingStatus? "모집중" : "모집 종료"}</p>
                    <p className='category'>{data.category}</p>
                    <p className='date'>2022.12.26</p>
                </div>
                <button className='title'>{data.title}</button>
                <p>{data.content}</p>
            </div>
            <div className='center'>
                <p className='rate'>{data.priceInfo.pricePolicy === "HOUR" ? "시간당" : data.priceInfo.pricePolicy} <span>{price}원</span></p>
                <p>{data.locations.join(', ')}</p>
            </div>
            <div className='right'>
                <Button text='참가 신청 현황'/>
                {data.meetingStatus &&
                <div>
                    <Button text='시간 변경' />
                    <Button text='모임 취소' />
                </div>
                }
            </div>
        </div>
    )
}

export default MyMeetingCard;