import styled from 'styled-components';
import { SetStateAction } from 'react';

interface CategorysProps {
   category: string;
   setCategory: (value: SetStateAction<string>) => void;
}

const Categorys = ({ category, setCategory }: CategorysProps) => {
   return (
      <CategorysStyle>
         <li>
            <button
               onClick={() => setCategory('라이프스타일')}
               className={category === '라이프스타일' ? 'selected' : ''}>
               라이프스타일
            </button>
         </li>
         <li>
            <button onClick={() => setCategory('디자인')} className={category === '디자인' ? 'selected' : ''}>
               디자인
            </button>
         </li>
         <li>
            <button onClick={() => setCategory('미디어')} className={category === '미디어' ? 'selected' : ''}>
               미디어
            </button>
         </li>
         <li>
            <button onClick={() => setCategory('개발')} className={category === '개발' ? 'selected' : ''}>
               개발
            </button>
         </li>
         <li>
            <button onClick={() => setCategory('교육')} className={category === '교육' ? 'selected' : ''}>
               교육
            </button>
         </li>
         <li>
            <button onClick={() => setCategory('금융')} className={category === '금융' ? 'selected' : ''}>
               금융
            </button>
         </li>
         <li>
            <button onClick={() => setCategory('소셜')} className={category === '소셜' ? 'selected' : ''}>
               소셜
            </button>
         </li>
         <li>
            <button onClick={() => setCategory('인공지능')} className={category === '인공지능' ? 'selected' : ''}>
               인공지능
            </button>
         </li>
      </CategorysStyle>
   );
};

export default Categorys;

export const CategorysStyle = styled.ul`
   background-color: #f0f0f0;
   border-radius: 15px;
   padding: 20px 30px;
   display: flex;
   flex-wrap: wrap;
   > li {
      width: 50%;
      margin: 8px 0;
      button.selected {
         color: #444bff;
      }
   }
`;
