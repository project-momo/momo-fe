import Link from 'next/link';
import { Img, Layout, Li, Ul } from '../common/Category';
import user from '../../assets/images/icon_user.svg';
import crown from '../../assets/images/icon_crown.svg';
import heart from '../../assets/images/icon_heart.svg';
import piggyBank from '../../assets/images/icon_piggy.svg';
import { useRouter } from 'next/router';

const MyCategory = () => {
   const router = useRouter();
   const pathname = router.pathname;
   return (
      <Layout>
         <Ul>
            <Li>
               <Link href="/mypage" className={pathname === '/mypage' ? 'active' : ''}>
                  <Img src={user} alt="" />
                  <p>마이페이지</p>
               </Link>
            </Li>
            <Li>
               <Link href="/meetings" className={pathname === '/meetings' ? 'active' : ''}>
                  <Img src={crown} alt="" />
                  <p>만든 모임 목록</p>
               </Link>
            </Li>
            <Li>
               <Link href="/attending" className={pathname === '/attending' ? 'active' : ''}>
                  <Img src={heart} alt="" />
                  <p>참여 모임 목록</p>
               </Link>
            </Li>
            <Li>
               <Link href="/point" className={pathname === '/point' ? 'active' : ''}>
                  <Img src={piggyBank} alt="" />
                  <p>적립금</p>
               </Link>
            </Li>
         </Ul>
      </Layout>
   );
};

export default MyCategory;
