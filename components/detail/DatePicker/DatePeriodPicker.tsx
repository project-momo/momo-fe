import React, { SetStateAction, useState } from 'react';
import { useRecoilState } from 'recoil';
import { freeDate } from '../../../atoms/sub/atom';
import { CustomDatePicker } from '../../../pages/meeting/create';
import { addDays } from 'date-fns';
interface FreeProps {
   startDates: any;
   endDate: any;
   dayWeeks: number[];
}
const DatePeriodPicker = ({ startDates, endDate, dayWeeks }: FreeProps) => {
   const dpSetting = {
      dateFormat: 'yyyy-MM-dd',
      dateFormatCalendar: 'yyyy.MM',
      withPortal: true
   };

   const weekArray = [1, 2, 3, 4, 5, 6, 7];
   const filterArray = weekArray.filter(el => !dayWeeks.includes(el));

   console.log(filterArray);
   // const [startDateState, setStartDate] = useState(new Date(startDates));
   // const [endDateState, setendDate] = useState(new Date(endDate));
   const activeDate = (date: any) => {
      const [year, month, datee] = date.toISOString().split('T')[0].split('-').map(Number);
      const [startYear, startMonth, startDatee] = startDates.split('-').map(Number);
      const [endYear, endMonth, endDatee] = endDate.split('-').map(Number);

      const datee2 = +datee + 1;
      console.log(datee2);
      if (year < startYear) {
         if (month < startMonth) {
            if (datee2 < startDatee) return false;
            return false;
         }
         return false;
      }
      console.log(year > endYear);
      if (year > endYear) {
         return false;
      }
      if (month > endMonth) {
         if (datee2 > endDatee) return false;
         return false;
      }
      for (let i = 0; i < filterArray.length; i++) {
         if (date.getDay() === 0) {
            if (7 === filterArray[i]) {
               return false;
            }
         }
         if (date.getDay() === filterArray[i]) {
            return false;
         }
      }

      return true;
   };
   const exclude = (date: any) => {
      if (date.getDate() === 2) {
         return false;
      }
      return true;
   };
   const none = () => {
      return null;
   };
   return (
      <div>
         <CustomDatePicker
            {...dpSetting}
            // selected={startDateState}
            // startDate={startDateState}
            // endDate={endDateState}
            placeholderText={'클릭해서 일정을 확인하세요.'}
            filterDate={activeDate}
            onChange={none}
         />
      </div>
   );
};

export default DatePeriodPicker;
