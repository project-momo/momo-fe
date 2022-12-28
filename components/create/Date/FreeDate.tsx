import { CustomDatePicker } from '../../../pages/meeting/create';
import { ko } from 'date-fns/esm/locale';

interface FreeDateProps {
  dates: Date[];
  setDates: any;
}
const FreeDate = ({ dates, setDates }: FreeDateProps) => {
  return (
    <CustomDatePicker
      locale={ko}
      dateFormat="yyyy-MM-dd"
      minDate={new Date()}
      withPortal
      shouldCloseOnSelect={false}
      highlightDates={[...dates]}
      // selected={dates[0]}
      placeholderText={
        dates.length
          ? dates
              .map((date) => new Date(date).toISOString().slice(0, 10))
              .sort(
                (a, b) =>
                  Number(a.replaceAll('-', '')) - Number(b.replaceAll('-', '')),
              )
              .join(', ')
          : '선택'
      }
      onChange={(selectedDate) => {
        // if (dates.includes(selectedDate)) {
        //   setDates([
        //     ...dates.filter(
        //       (date: Date | null) => date !== selectedDate,
        //     ),
        //   ]);
        // } else {
        setDates([...dates, selectedDate]);
        // }
      }}
    />
  );
};

export default FreeDate;
