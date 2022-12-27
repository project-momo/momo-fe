import { CustomDatePicker } from '../../../pages/meeting/create';
import { ko } from 'date-fns/esm/locale';
// date picker
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface OneDateProps {
  date: Date;
  setDate: any;
}

const OneDate = ({ date, setDate }: OneDateProps) => {
  return (
    <DatePicker
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
