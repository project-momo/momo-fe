import React from 'react';
import styled from 'styled-components';
import QnAList from './QnAList';

const Qna = () => {
  return (
    <>
      <QnaWrap>
        <QnAList />
      </QnaWrap>
    </>
  );
};

export default Qna;

const QnaWrap = styled.div`
  margin-bottom: 40px;
  padding: 12px 0;
`;
