import React, { SetStateAction } from 'react';
import { useRecoilState } from 'recoil';
import { freeDate } from '../../../atoms/sub/atom';
import { CustomDatePicker } from '../../../pages/meeting/create';
interface FreeProps {
   dates: string[];
}
const DateFreePicker = ({ dates }: FreeProps) => {
   const dpSetting = {
      dateFormat: 'yyyy-MM-dd',
      dateFormatCalendar: 'yyyy.MM',
      withPortal: true
   };
   const [date, setDate] = useRecoilState(freeDate);
   const activeDate = (date: any) => {
      const [year, month, datee] = date.toISOString().split('T')[0].split('-');
      const datee2 = +datee + 1;
      if (dates.indexOf(`${year}-${month}-${datee2}`) === -1) {
         return false;
      } else {
         return true;
      }
   };
   return (
      <div>
         <CustomDatePicker
            {...dpSetting}
            minDate={new Date()}
            selected={date}
            filterDate={activeDate}
            onChange={(selectedDate: SetStateAction<Date | [Date | null, Date | null] | null>) => setDate(selectedDate)}
         />
      </div>
   );
};

export default DateFreePicker;
