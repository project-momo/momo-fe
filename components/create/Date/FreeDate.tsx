import { CustomDatePicker } from '../../../pages/meeting/create';
import { ko } from 'date-fns/esm/locale';
import { SetStateAction } from 'react';

interface FreeDateProps {
   dates: Date[];
   setDates: (value: SetStateAction<any>) => void;
}
const FreeDate = ({ dates, setDates }: FreeDateProps) => {
   return (
      <CustomDatePicker
         locale={ko}
         dateFormat="yyyy-MM-dd"
         minDate={new Date()}
         withPortal
         selected={dates[0]}
         shouldCloseOnSelect={false}
         highlightDates={[...dates]}
         onChange={selectedDate => {
            setDates([...dates, selectedDate]);
         }}
         customInput={
            <div>
               {dates.length
                  ? dates
                       .map(date => new Date(date).toISOString().slice(0, 10))
                       .sort((a, b) => Number(a.replaceAll('-', '')) - Number(b.replaceAll('-', '')))
                       .join(', ')
                  : '선택'}
            </div>
         }
      />
   );
};

export default FreeDate;
