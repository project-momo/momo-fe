import { CustomDatePicker } from '../../../pages/meeting/create';
import { ko } from 'date-fns/esm/locale';

interface OneDateProps {
  date: Date;
  setDate: any;
}

const OneDate = ({ date, setDate }: OneDateProps) => {
  return (
    <CustomDatePicker
      locale={ko}
      dateFormat="yyyy-MM-dd"
      minDate={new Date()}
      withPortal
      selected={date}
      onChange={(selectedDate) => setDate(selectedDate)}
    />
  );
};

export default OneDate;
