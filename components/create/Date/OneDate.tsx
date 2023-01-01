import { CustomDatePicker } from '../../../pages/meeting/create';
// import { ko } from 'date-fns/esm/locale';
import { SetStateAction } from 'react';

export interface DpSettingType {
   locale: any;
   dateFormat: string;
   dateFormatCalendar: string;
   withPortal: boolean;
}
interface OneDateProps {
   date: Date;
   setDate: (value: SetStateAction<Date | [Date | null, Date | null] | null>) => void;
   dpSetting: DpSettingType;
}

const OneDate = ({ date, setDate, dpSetting }: OneDateProps) => {
   return (
      <CustomDatePicker
         {...dpSetting}
         minDate={new Date()}
         selected={date}
         onChange={(selectedDate: SetStateAction<Date | [Date | null, Date | null] | null>) => setDate(selectedDate)}
      />
   );
};

export default OneDate;
