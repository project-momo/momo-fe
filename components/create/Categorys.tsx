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
            <button onClick={() => setCategory('LIFESTYLE')} className={category === 'LIFESTYLE' ? 'selected' : ''}>
               라이프스타일
            </button>
         </li>
         <li>
            <button onClick={() => setCategory('DESIGN')} className={category === 'DESIGN' ? 'selected' : ''}>
               디자인
            </button>
         </li>
         <li>
            <button onClick={() => setCategory('MEDIA')} className={category === 'MEDIA' ? 'selected' : ''}>
               미디어
            </button>
         </li>
         <li>
            <button onClick={() => setCategory('DEVELOP')} className={category === 'DEVELOP' ? 'selected' : ''}>
               개발
            </button>
         </li>
         <li>
            <button onClick={() => setCategory('EDU')} className={category === 'EDU' ? 'selected' : ''}>
               교육
            </button>
         </li>
         <li>
            <button onClick={() => setCategory('FINANCE')} className={category === 'FINANCE' ? 'selected' : ''}>
               금융
            </button>
         </li>
         <li>
            <button onClick={() => setCategory('SOCIAL')} className={category === 'SOCIAL' ? 'selected' : ''}>
               소셜
            </button>
         </li>
         <li>
            <button onClick={() => setCategory('AI')} className={category === 'AI' ? 'selected' : ''}>
               인공지능
            </button>
         </li>
      </CategorysStyle>
   );
};

export default Categorys;

const CategorysStyle = styled.ul`
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
