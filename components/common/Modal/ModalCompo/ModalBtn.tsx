import { useRouter } from 'next/router';
import styled from 'styled-components';
interface BtnProps {
   mainBtnLabel: string;
   mainBtnPath: string;
}
const ModalBtn = ({ mainBtnLabel, mainBtnPath }: BtnProps) => {
   const router = useRouter();
   return (
      <>
         <ColorBtn onClick={() => router.push(mainBtnPath)} data-bs-dismiss="modal">
            {mainBtnLabel}
         </ColorBtn>
      </>
   );
};

export default ModalBtn;

export const ColorBtn = styled.button`
   background-color: #6a6ff2;
   padding: 15px 25px;
   color: white;
   font-size: 16px;
   font-weight: 700;
   display: block;
   margin: 0 auto;
   border-radius: 30px;
   box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
   transition: 0.2s;
   &:hover {
      background-color: #444bff;
   }
`;
