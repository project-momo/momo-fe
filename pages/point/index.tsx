import { CenterSection } from '../../styles/style';
import MyCategory from '../../components/mypage/MyCategory';
import Point from '../../components/mypage/Point';
import PointList from '../../components/mypage/PointList';
import { useSetRecoilState } from 'recoil';
import { myPoint } from '../../atoms/mypage/atoms';
import { useEffect } from 'react';
import { myPointInfo } from '../../dummy/mypage/dummy';

const MyPoint = () => {
   const setPointList = useSetRecoilState(myPoint);

   useEffect(() => {
      // 통신
      // axios.get('')
      // .then((res) => {
      //    setPointList(res);
      // })
      const fetchData = myPointInfo;
      setPointList(fetchData);
   }, []);

   return (
      <>
         <MyCategory />
         <CenterSection>
            <Point myPoint />
            <PointList />
         </CenterSection>
      </>
   );
};

export default MyPoint;
