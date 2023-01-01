import { CustomDatePicker } from '../../../pages/meeting/create';
import { ko } from 'date-fns/esm/locale';
import { SetStateAction } from 'react';
import { DpSettingType } from './OneDate';

interface FreeDateProps {
   dates: Date[];
   setDates: (value: SetStateAction<any>) => void;
   dpSetting: DpSettingType;
}
const FreeDate = ({ dates, setDates, dpSetting }: FreeDateProps) => {
   return (
      <CustomDatePicker
         {...dpSetting}
         minDate={new Date()}
         selected={dates[0]}
         shouldCloseOnSelect={false}
         highlightDates={[...dates]}
         onChange={(selectedDate: any) => {
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
