import styled from 'styled-components';

interface LiTitleProps {
  main: string;
  sub?: string;
}

const LiTitle = ({ main, sub }: LiTitleProps) => {
  return (
    <LiTtileStyle>
      <span>{main}</span>
      <span>{sub}</span>
    </LiTtileStyle>
  );
};

export default LiTitle;

const LiTtileStyle = styled.div`
  margin-bottom: 20px;
  > span:nth-child(1) {
    font-weight: 700;
  }
  > span:nth-child(2) {
    margin-left: 20px;
  }
`;
