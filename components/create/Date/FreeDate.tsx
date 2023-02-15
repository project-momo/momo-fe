import { CustomDatePicker } from '../../../pages/meeting/create';
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
         shouldCloseOnSelect={false}
         highlightDates={[...dates.map(date => new Date(new Date(date).setDate(new Date(date).getDate() - 1)))]}
         onChange={(selectedDate: any) => {
            if (dates.map(date => new Date(date)).includes(selectedDate))
               setDates([...dates, selectedDate.setDate(selectedDate.getDate() + 1)]);
         }}
         customInput={
            <div className="react-datepicker__inputDiv-container">
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
