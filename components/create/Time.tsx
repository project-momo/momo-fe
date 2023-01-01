import { CustomDatePicker, Flex, Wave } from '../../pages/meeting/create';
import { ko } from 'date-fns/esm/locale';
import { SetStateAction } from 'react';

interface TimeProps {
   startTime: Date;
   endTime: Date;
   setStartTime: (value: SetStateAction<Date | [Date | null, Date | null] | null>) => void;
   setEndTime: (value: SetStateAction<Date | [Date | null, Date | null] | null>) => void;
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
            onChange={(selectedDate: SetStateAction<Date | [Date | null, Date | null] | null>) => {
               setStartTime(selectedDate);
               setEndTime(selectedDate);
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
            minTime={startTime}
            maxTime={new Date().setHours(23, 0, 0, 0)}
            selected={endTime}
            onChange={(selectedDate: SetStateAction<Date | [Date | null, Date | null] | null>) => {
               setEndTime(selectedDate);
            }}
         />
      </Flex>
   );
};

export default Time;
