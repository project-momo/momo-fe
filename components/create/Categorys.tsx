import styled from 'styled-components';

interface CategorysProps {
  category: string;
  setCategory: any;
}

const Categorys = ({ category, setCategory }: CategorysProps) => {
  return (
    <CategorysStyle>
      <li
        onClick={() => setCategory('라이프스타일')}
        className={category === '라이프스타일' ? 'selected' : ''}
      >
        라이프스타일
      </li>
      <li
        onClick={() => setCategory('디자인')}
        className={category === '디자인' ? 'selected' : ''}
      >
        디자인
      </li>
      <li
        onClick={() => setCategory('미디어')}
        className={category === '미디어' ? 'selected' : ''}
      >
        미디어
      </li>
      <li
        onClick={() => setCategory('개발')}
        className={category === '개발' ? 'selected' : ''}
      >
        개발
      </li>
      <li
        onClick={() => setCategory('교육')}
        className={category === '교육' ? 'selected' : ''}
      >
        교육
      </li>
      <li
        onClick={() => setCategory('금융')}
        className={category === '금융' ? 'selected' : ''}
      >
        금융
      </li>
      <li
        onClick={() => setCategory('소셜')}
        className={category === '소셜' ? 'selected' : ''}
      >
        소셜
      </li>
      <li
        onClick={() => setCategory('인공지능')}
        className={category === '인공지능' ? 'selected' : ''}
      >
        인공지능
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
    cursor: pointer;
    &.selected {
      color: #444bff;
    }
  }
`;
