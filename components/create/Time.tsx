import { CustomDatePicker, Flex, Wave } from '../../pages/meeting/create';
import { ko } from 'date-fns/esm/locale';

interface TimeProps {
  startTime: Date;
  endTime: Date;
  setStartTime: any;
  setEndTime: any;
}

const Time = ({ startTime, endTime, setStartTime, setEndTime }: TimeProps) => {
  return (
    <Flex>
      <CustomDatePicker
        locale={ko}
        dateFormat="HH:mm"
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={60}
        timeCaption="시작 시간"
        selected={startTime}
        onChange={(selectedDate) => {
          setStartTime(selectedDate);
        }}
      />
      <Wave>~</Wave>
      <CustomDatePicker
        locale={ko}
        dateFormat="HH:mm"
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={60}
        timeCaption="종료 시간"
        selected={endTime}
        onChange={(selectedDate) => {
          setEndTime(selectedDate);
        }}
      />
    </Flex>
  );
};

export default Time;
