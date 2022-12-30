import { CustomDatePicker } from '../../../pages/meeting/create';
import { ko } from 'date-fns/esm/locale';
import { SetStateAction } from 'react';

interface OneDateProps {
   date: Date;
   setDate: (value: SetStateAction<Date | [Date | null, Date | null] | null>) => void;
}

const OneDate = ({ date, setDate }: OneDateProps) => {
   return (
      <CustomDatePicker
         locale={ko}
         dateFormat="yyyy-MM-dd"
         dateFormatCalendar="yyyy.MM"
         minDate={new Date()}
         withPortal
         selected={date}
         onChange={selectedDate => setDate(selectedDate)}
      />
   );
};

export default OneDate;
