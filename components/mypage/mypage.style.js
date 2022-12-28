import styled from 'styled-components';

export const BasicWrapper = styled.div`
   width: 100%;
   margin-top: 30px;
   padding: 0 20px;
   float: left;
   &.half {
      width: 50%;
   }
   .title {
      width: 100%;
      font-size: 16px;
      font-weight: 900;
      display: flex;
      justify-content: space-between;
      .seeMore {
         margin-right: 5px;
      }
   }
   .card-basic {
      width: 100%;
      background-color: white;
      border-radius: 15px;
      box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
      padding: 15px 20px;
      margin: 10px 0;
   }
`;
