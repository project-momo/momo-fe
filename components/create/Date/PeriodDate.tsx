import styled from 'styled-components';
import {
  CustomDatePicker,
  RadioButtons,
  Wave,
} from '../../../pages/meeting/create';
import { ko } from 'date-fns/esm/locale';

interface PeriodDateProps {
  startDate: Date;
  endDate: Date;
  setStartDate: any;
  setEndDate: any;
  onCheckDayWeeks: any;
}

const PeriodDate = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  onCheckDayWeeks,
}: PeriodDateProps) => {
  return (
    <>
      <Flex>
        <CustomDatePicker
          locale={ko}
          dateFormat="yyyy-MM-dd"
          minDate={new Date()}
          withPortal
          selectsStart
          selected={startDate}
          startDate={startDate}
          endDate={endDate}
          onChange={(selectedDate) => {
            setStartDate(selectedDate);
            setEndDate(selectedDate);
          }}
        />
        <Wave>~</Wave>
        <CustomDatePicker
          locale={ko}
          dateFormat="yyyy-MM-dd"
          minDate={startDate}
          withPortal
          selectsEnd
          selected={endDate}
          startDate={startDate}
          endDate={endDate}
          onChange={(selectedDate) => {
            setEndDate(selectedDate);
          }}
        />
      </Flex>
      <RadioButtons>
        <label>
          <input
            type="checkbox"
            value="1"
            onChange={(e) => onCheckDayWeeks(Number(e.target.value))}
          />
          월
        </label>
        <label>
          <input
            type="checkbox"
            value="2"
            onChange={(e) => onCheckDayWeeks(Number(e.target.value))}
          />
          화
        </label>
        <label>
          <input
            type="checkbox"
            value="3"
            onChange={(e) => onCheckDayWeeks(Number(e.target.value))}
          />
          수
        </label>
        <label>
          <input
            type="checkbox"
            value="4"
            onChange={(e) => onCheckDayWeeks(Number(e.target.value))}
          />
          목
        </label>
        <label>
          <input
            type="checkbox"
            value="5"
            onChange={(e) => onCheckDayWeeks(Number(e.target.value))}
          />
          금
        </label>
        <label>
          <input
            type="checkbox"
            value="6"
            onChange={(e) => onCheckDayWeeks(Number(e.target.value))}
          />
          토
        </label>
        <label>
          <input
            type="checkbox"
            value="7"
            onChange={(e) => onCheckDayWeeks(Number(e.target.value))}
          />
          일
        </label>
      </RadioButtons>
    </>
  );
};

export default PeriodDate;

const Flex = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;

  .react-datepicker-wrapper {
    width: 192px;
  }
`;
