import styled from 'styled-components';
import { CustomDatePicker, RadioButtons, Wave } from '../../../pages/meeting/create';
import { SetStateAction } from 'react';
import { DpSettingType } from './OneDate';

interface PeriodDateProps {
   startDate: Date;
   endDate: Date;
   setStartDate: (value: SetStateAction<Date | [Date | null, Date | null] | null>) => void;
   setEndDate: (value: SetStateAction<Date | [Date | null, Date | null] | null>) => void;
   onCheckDayWeeks: (value: number) => void;
   dpSetting: DpSettingType;
}

const PeriodDate = ({ startDate, endDate, setStartDate, setEndDate, onCheckDayWeeks, dpSetting }: PeriodDateProps) => {
   return (
      <>
         <Flex>
            <CustomDatePicker
               {...dpSetting}
               minDate={new Date()}
               selectsStart
               selected={startDate}
               startDate={startDate}
               endDate={endDate}
               onChange={(selectedDate: SetStateAction<Date | [Date | null, Date | null] | null>) => {
                  setStartDate(selectedDate);
                  setEndDate(selectedDate);
               }}
            />
            <Wave>~</Wave>
            <CustomDatePicker
               {...dpSetting}
               minDate={startDate}
               selectsEnd
               selected={endDate}
               startDate={startDate}
               endDate={endDate}
               onChange={(selectedDate: SetStateAction<Date | [Date | null, Date | null] | null>) => {
                  setEndDate(selectedDate);
               }}
            />
         </Flex>
         <RadioButtons>
            <label>
               <input type="checkbox" id="1" value="1" onChange={e => onCheckDayWeeks(Number(e.target.value))} />
               <label htmlFor="1"></label>월
            </label>
            <label>
               <input type="checkbox" id="2" value="2" onChange={e => onCheckDayWeeks(Number(e.target.value))} />
               <label htmlFor="2"></label>화
            </label>
            <label>
               <input type="checkbox" id="3" value="3" onChange={e => onCheckDayWeeks(Number(e.target.value))} />
               <label htmlFor="3"></label>수
            </label>
            <label>
               <input type="checkbox" id="4" value="4" onChange={e => onCheckDayWeeks(Number(e.target.value))} />
               <label htmlFor="4"></label>목
            </label>
            <label>
               <input type="checkbox" id="5" value="5" onChange={e => onCheckDayWeeks(Number(e.target.value))} />
               <label htmlFor="5"></label>금
            </label>
            <label>
               <input type="checkbox" id="6" value="6" onChange={e => onCheckDayWeeks(Number(e.target.value))} />
               <label htmlFor="6"></label>토
            </label>
            <label>
               <input type="checkbox" id="7" value="7" onChange={e => onCheckDayWeeks(Number(e.target.value))} />
               <label htmlFor="7"></label>일
            </label>
         </RadioButtons>
      </>
   );
};

export default PeriodDate;

const Flex = styled.div`
   margin-bottom: 15px;
   display: flex;
   align-items: center;

   .react-datepicker-wrapper {
      width: 192px;
   }
`;
