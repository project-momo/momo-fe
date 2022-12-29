import React from 'react';
import styled from 'styled-components';
import IconCommentAdd from './../../assets/images/icon_cmment_add.svg';

const QnaInput = () => {
  return (
    <InputWarp>
      <Input placeholder="궁금한 것이 있다면 질문을 남겨주세요." />
      <SubmitBtn>
        <img src={IconCommentAdd} />
      </SubmitBtn>
    </InputWarp>
  );
};

export default QnaInput;

const InputWarp = styled.div`
  position: relative;
`;
const Input = styled.input`
  padding: 20px 30px;
  background-color: #f0f0f0;
  transition: 0.3s;
  font-size: 14px;
  border-radius: 30px;
  border: none;
  width: 100%;
  outline: none;
  :focus {
    border: 2px solid #9093f3;
  }
  ::placeholder {
    color: #717171;
  }
`;
const SubmitBtn = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 10px;
  top: 10px;
  background-color: white;
  box-shadow: 0px 1px 3px rgba(68, 75, 255, 0.15);

  img {
    width: 25px;
    height: 25px;
  }
`;
