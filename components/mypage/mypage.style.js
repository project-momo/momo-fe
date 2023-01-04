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

export const MeetingWrapper = styled(BasicWrapper)`
   margin-top: 30px;
   float: left;
   &.hidden {
      display: none;
   }
   .title {
      span {
         margin-left: 15px;
      }
      .seeMore {
         font-size: 15px;
         font-weight: 600;
         &:hover {
            color: #444bff;
         }
      }
   }
   .card-basic {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 138px;
      &.empty {
         button {
            font-size: 16px;
            font-weight: 600;
            color: #444bff;
         }
      }
      h2 {
         display: flex;
         width: 100%;
         flex: 1;
      }
      .left {
         flex: 1;
         padding-right: 50px;
         div {
            display: flex;
            align-items: flex-end;
            font-size: 14px;
            .status {
               font-size: 18px;
               font-weight: 900;
               margin-right: 10px;
               &.open {
                  color: #ff4d4d;
               }
               &.closed {
                  color: #8a8a8a;
               }
            }
            .category {
               margin-right: 10px;
               font-weight: 600;
            }
         }
         .title {
            font-size: 18px;
            margin: 10px 0;
            padding: 0;
         }
         .title + p {
            font-size: 15px;
            word-break: keep-all;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            word-wrap: break-wrod;
            text-overflow: ellipsis;
            overflow: hidden;
         }
      }

      .center {
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: flex-end;
         margin-right: 25px;
         height: 108px;
         p {
            font-size: 15px;
            span {
               font-size: 16px;
               font-weight: 600;
            }
         }
      }

      .right {
         width: 220px;
         display: flex;
         flex-direction: column;
         justify-content: center;
         div:first-child {
            button {
               color: #444bff;
               background-color: #ecf4ff;
            }
         }
         div:nth-child(2) {
            display: flex;
            justify-content: space-between;
            margin-top: 5px;
            button {
               width: 49%;
            }
         }
      }
      .accordion-body {
         padding: 10px 0 0 0;
      }

      /* 참가 신청 현황 */
      .application-status {
         width: 100%;
      }
      .application {
         border-top: 1px solid #d2d2d2;
         padding-top: 10px;
         .title {
            margin-bottom: 10px;
         }
         .accordion-header {
            display: flex;
         }
         .application {
            width: 100%;
            display: flex;
            align-items: center;
            padding: 10px 15px;
            border-top: 1px solid #d2d2d2;
         }
         .profile {
            width: 13%;
            display: flex;
            align-items: center;
            margin-right: 30px;
            .imgBox {
               width: 35px;
               height: 35px;
               border-radius: 50%;
               background-color: lightgray;
               margin-right: 10px;
               overflow: hidden;
            }
            p {
               font-size: 16px;
               font-weight: 600;
            }
         }
         .timeInfo {
            width: 15%;
            font-size: 15px;
            margin-right: 70px;
            p {
               margin: 5px 0;
            }
         }
         .seeMessage {
            flex: 1;
            button {
               font-size: 15px;
               font-weight: 900;
               display: inline;
               cursor: pointer;
               .icon {
                  width: 13px;
                  margin-left: 5px;
                  transition: 0.3s;
               }
               .icon.active {
                  transform: rotateZ(-180deg);
               }
            }
         }
         .btn-wrapper {
            width: 105px;
            display: flex;
            justify-content: space-between;
            button {
               font-size: 15px;
               font-weight: 600;
               border: 1px solid #c6c6c6;
               background: white;
               width: 50px;
               height: 32px;
               border-radius: 5px;
               &:hover {
                  color: #444bff;
               }
            }
         }
         .contact-wrapper {
            display: flex;
            flex-direction: column;
            font-size: 16px;
            font-weight: 600;
            text-align: center;
            p {
               margin: 2px 0;
            }
         }
         .accordion-body.message {
            background-color: #e8e8e8;
            font-size: 15px;
            font-weight: 600;
            padding: 15px;
            margin-bottom: 15px;
            border-bottom-left-radius: 15px;
            border-bottom-right-radius: 15px;
         }
      }
   }
`;
