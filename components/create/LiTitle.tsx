import styled from 'styled-components';

interface LiTitleProps {
   main: string;
   sub?: string;
   error?: string;
}

interface ErrorType {
   error?: string;
}

const LiTitle = ({ main, sub, error }: LiTitleProps) => {
   return (
      <LiTtileStyle error={error}>
         <span>{main}</span>
         <span>{error ? error : sub}</span>
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
      color: ${props => props.error && 'red'};
   }
`;
