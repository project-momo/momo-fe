import styled from 'styled-components';

interface TagsProps {
   tags: string[];
   onClickTag: (value: string) => void;
}

const Tags = ({ tags, onClickTag }: TagsProps) => {
   return (
      <TagsStyle>
         <li>
            <button onClick={() => onClickTag('MENTORING')} className={tags.includes('MENTORING') ? 'selected' : ''}>
               멘토링
            </button>
         </li>
         <li>
            <button onClick={() => onClickTag('ONLINE')} className={tags.includes('ONLINE') ? 'selected' : ''}>
               온라인
            </button>
         </li>
         <li>
            <button onClick={() => onClickTag('OFFLINE')} className={tags.includes('OFFLINE') ? 'selected' : ''}>
               오프라인모임
            </button>
         </li>
         <li>
            <button onClick={() => onClickTag('STUDY')} className={tags.includes('STUDY') ? 'selected' : ''}>
               스터디
            </button>
         </li>
         <li>
            <button onClick={() => onClickTag('MEETING')} className={tags.includes('MEETING') ? 'selected' : ''}>
               모임
            </button>
         </li>
         <li>
            <button onClick={() => onClickTag('FIVE')} className={tags.includes('FIVE') ? 'selected' : ''}>
               5인이상
            </button>
         </li>
      </TagsStyle>
   );
};

export default Tags;

const TagsStyle = styled.ul`
   background-color: #f0f0f0;
   border-radius: 15px;
   padding: 20px 30px;
   display: flex;

   > li button {
      padding: 7px 12px;
      border-radius: 15px;
      transition: background-color 0.2s ease-in-out;
   }
   > li button.selected {
      background-color: #d4e6ff;
      color: #6a6ff2;
   }
   > li:not(:last-child) {
      margin-right: 15px;
   }
`;
