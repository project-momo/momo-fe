import styled from 'styled-components';
interface BtnProps {
   mainBtnLabel : string
}
const ModalBtn = ({mainBtnLabel}:BtnProps) => {
   return (
      <>
         <ColorBtn>{mainBtnLabel}</ColorBtn>
      </>
   );
};

export default ModalBtn;

const ColorBtn =styled.button`
   background-color: #6A6FF2;
   padding: 15px 25px;
   color: white;
   font-size:  16px;
   font-weight: 700;
   display: block;
   margin: 0 auto;
   border-radius: 30px;
   box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
`