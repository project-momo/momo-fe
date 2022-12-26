import React from 'react';
import styled from 'styled-components';
import IconClose from './../../../assets/images/icon_close.svg'

interface ModalProps {
	children: React.ReactNode;
}
export const Modal = ({children}:ModalProps) => {
   return (
      <Dim>
         <ModalLayout>
            <CloseBtn icon={IconClose}>
               <span>x</span>
            </CloseBtn>
            {children}
         </ModalLayout>
      </Dim>
   );
};

const Dim = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: rgba(0, 0, 0, 0.7);
`
const ModalLayout = styled.div`
   position: relative;
   padding: 60px 30px 35px;
   background-color: white;
   box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.15);
   border-radius: 15px;
   min-width: 550px;
`
const CloseBtn = styled.div<{icon : string}>`
   width: 30px;
   height: 30px;
   font-size: 0;
   border-radius: 100%;
   background-color: rgba(68, 75, 255, 0.15);
   background-image: url(${(p)=> `${p.icon}`});
   background-position: 50% 50%;
   background-repeat: no-repeat;
   position: absolute;
   top: 12px;
   right: 12px;
`