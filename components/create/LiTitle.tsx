import styled from 'styled-components';

interface LiTitleProps {
   main: string;
   sub?: string;
   error?: string;
   preview?: string;
}

interface ErrorType {
   error?: string;
   preview?: string;
}

const LiTitle = ({ main, sub, error, preview }: LiTitleProps) => {
   return (
      <LiTtileStyle error={error} preview={preview}>
         <span>{main}</span>
         <span>{preview ? preview : error ? error : sub}</span>
      </LiTtileStyle>
   );
};

export default LiTitle;

const LiTtileStyle = styled.div<ErrorType>`
   margin-bottom: 20px;

   > span:nth-child(1) {
      font-weight: 700;
      color: ${props => props.error && 'red'};
   }
   > span:nth-child(2) {
      margin-left: 20px;
      color: ${props => (props.preview ? '#444BFF' : props.error && 'red')};
      font-weight: 600;
   }
`;
